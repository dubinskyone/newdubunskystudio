import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const PORT = Number(process.env.PORT || 4174);

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.woff2': 'font/woff2',
};

const COMPRESSIBLE_TYPES = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.svg',
]);

const compressedCache = new Map();

async function resolveFile(urlPathname) {
  const sanitizedPath = decodeURIComponent(urlPathname.split('?')[0]).replace(/^\/+/, '');
  const requestedPath = path.normalize(sanitizedPath);
  const safePath = requestedPath.startsWith('..') ? '' : requestedPath;

  const candidates = [];
  if (!safePath || safePath.endsWith('/')) {
    candidates.push(path.join(DIST_DIR, safePath, 'index.html'));
  } else {
    candidates.push(path.join(DIST_DIR, safePath));
    candidates.push(path.join(DIST_DIR, safePath, 'index.html'));
  }

  for (const candidate of candidates) {
    try {
      const fileStat = await stat(candidate);
      if (fileStat.isFile()) return candidate;
    } catch {}
  }

  return path.join(DIST_DIR, 'index.html');
}

function getMimeType(filePath) {
  return MIME_TYPES[path.extname(filePath)] ?? 'application/octet-stream';
}

function maybeCompress(filePath, content, acceptEncoding) {
  const extension = path.extname(filePath);
  if (!COMPRESSIBLE_TYPES.has(extension)) return null;
  if (!acceptEncoding?.includes('gzip')) return null;

  const cacheKey = `${filePath}:gzip`;
  const cached = compressedCache.get(cacheKey);
  if (cached) return cached;

  const gzipped = gzipSync(content, { level: 6 });
  const response = {
    body: gzipped,
    headers: {
      'Content-Encoding': 'gzip',
      Vary: 'Accept-Encoding',
    },
  };

  compressedCache.set(cacheKey, response);
  return response;
}

const server = createServer(async (req, res) => {
  try {
    const filePath = await resolveFile(req.url || '/');
    const content = await readFile(filePath);
    const compressed = maybeCompress(filePath, content, req.headers['accept-encoding'] || '');

    res.statusCode = 200;
    res.setHeader('Content-Type', getMimeType(filePath));
    res.setHeader('Cache-Control', 'no-cache');

    if (compressed) {
      Object.entries(compressed.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
      res.end(compressed.body);
      return;
    }

    res.end(content);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`Preview server error: ${error instanceof Error ? error.message : 'unknown'}`);
  }
});

server.listen(PORT, () => {
  console.log(`Compressed preview server running at http://127.0.0.1:${PORT}`);
});
