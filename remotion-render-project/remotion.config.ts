import { Config } from "@remotion/cli/config";

// Set the image format for video rendering (default: "jpeg")
Config.setVideoImageFormat('jpeg');

// Allow overwriting the output file
Config.setOverwriteOutput(true);

export const config = {
  codec: 'h264',
  durationInFrames: 300,
  fps: 30,
  height: 720,
  width: 1280,
  composition: {
    id: 'LottieAnimation',
    component: 'LottieAnimation',
    durationInFrames: 300,
    fps: 30,
    height: 720,
    width: 1280,
  },
};