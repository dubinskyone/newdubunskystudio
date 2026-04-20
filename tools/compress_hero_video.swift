import AVFoundation
import Foundation

enum HeroVideoCompressionError: Error {
  case invalidArguments
  case exportSessionUnavailable
  case exportFailed(String)
}

let arguments = CommandLine.arguments

guard arguments.count >= 3 else {
  throw HeroVideoCompressionError.invalidArguments
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[2])
let requestedStart = arguments.count > 3 ? Double(arguments[3]) ?? 0 : 0
let requestedDuration = arguments.count > 4 ? Double(arguments[4]) ?? 6 : 6

let asset = AVURLAsset(url: inputURL)
let durationSeconds = asset.duration.seconds
let hasFiniteDuration = durationSeconds.isFinite && durationSeconds > 0
let startTime = max(0, requestedStart)
let safeDuration = hasFiniteDuration
  ? min(requestedDuration, max(0.1, durationSeconds - startTime))
  : requestedDuration

let presets = [
  AVAssetExportPreset960x540,
  AVAssetExportPreset640x480,
  AVAssetExportPresetMediumQuality,
  AVAssetExportPresetLowQuality,
]

let exportPreset = presets.first { AVAssetExportSession.exportPresets(compatibleWith: asset).contains($0) }

guard let exportPreset else {
  throw HeroVideoCompressionError.exportSessionUnavailable
}

guard let exportSession = AVAssetExportSession(asset: asset, presetName: exportPreset) else {
  throw HeroVideoCompressionError.exportSessionUnavailable
}

try? FileManager.default.removeItem(at: outputURL)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true,
)

exportSession.outputURL = outputURL
exportSession.outputFileType = .mp4
exportSession.shouldOptimizeForNetworkUse = true
exportSession.timeRange = CMTimeRange(
  start: CMTime(seconds: startTime, preferredTimescale: 600),
  duration: CMTime(seconds: safeDuration, preferredTimescale: 600),
)

let semaphore = DispatchSemaphore(value: 0)
exportSession.exportAsynchronously {
  semaphore.signal()
}
semaphore.wait()

switch exportSession.status {
case .completed:
  break
case .failed:
  throw HeroVideoCompressionError.exportFailed(exportSession.error?.localizedDescription ?? "unknown export error")
case .cancelled:
  throw HeroVideoCompressionError.exportFailed("export cancelled")
default:
  throw HeroVideoCompressionError.exportFailed("export finished in unexpected state: \(exportSession.status.rawValue)")
}
