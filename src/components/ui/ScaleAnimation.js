import { useLottie } from "lottie-react";
import scaleAnimation from "../../animations/scaleAnimation/data.json";

const animationStyle = {
  maxHeight: 260,
  maxWidth: 280,
};

const ScaleAnimation = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, animationStyle);

  return View;
};

export default ScaleAnimation;
