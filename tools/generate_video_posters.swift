import AVFoundation
import AppKit
import Foundation

enum PosterError: Error {
  case invalidArguments
  case jpegEncodingFailed
}

let arguments = CommandLine.arguments

guard arguments.count >= 3 else {
  throw PosterError.invalidArguments
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[2])
let requestedTime = arguments.count > 3 ? Double(arguments[3]) ?? 1.0 : 1.0

let asset = AVURLAsset(url: inputURL)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
generator.maximumSize = CGSize(width: 1440, height: 1440)

let duration = asset.duration.seconds
let safeDuration = duration.isFinite && duration > 0 ? duration : requestedTime
let clampedTime = max(0, min(requestedTime, max(0, safeDuration - 0.05)))
let time = CMTime(seconds: clampedTime, preferredTimescale: 600)

let image = try generator.copyCGImage(at: time, actualTime: nil)
let bitmap = NSBitmapImageRep(cgImage: image)

guard
  let data = bitmap.representation(
    using: .jpeg,
    properties: [.compressionFactor: 0.76],
  )
else {
  throw PosterError.jpegEncodingFailed
}

let outputDirectory = outputURL.deletingLastPathComponent()
try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)
try data.write(to: outputURL)
