import { registerRoot } from "remotion";
import { Composition } from "remotion";
import React from "react";
import LottieAnimation from "./components/LottieAnimation";
import animationData from "./assets/animation.json";

const { fr, ip, op, w, h } = animationData; 

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LottieAnimation"
      component={LottieAnimation}
      durationInFrames={op - ip}
      fps={fr}
      width={w}
      height={h}
    />
  );
};

registerRoot(RemotionRoot);