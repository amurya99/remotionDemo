import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import { staticFile, Audio } from 'remotion';

interface LottieAnimationProps {
  isPaused?: boolean;
  isStopped?: boolean;
  speed?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  isPaused = false,
  isStopped = false,
  speed = 1,
}) => {
  // Modify the animation data to use staticFile for asset paths
  const modifiedAnimationData = {
    ...animationData,
    assets: animationData.assets.map((asset) => ({
      ...asset,
      u: staticFile('assets/images/'),
    })),
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: modifiedAnimationData,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      imagePreserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        isPaused={isPaused}
        isStopped={isStopped}
        speed={speed}
      />
      <Audio src={staticFile('assets/audio/audio.mp3')} />
    </div>
  );
};

export default LottieAnimation;