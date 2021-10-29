import { useLottie } from "lottie-react";
import uxAnimation from "../../animations/uxAnimation/data.js";

const animationStyle = {
  maxHeight: 310,
  maxWidth: 155,
};

const UXAnimation = () => {
  const options = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, animationStyle);

  return View;
};

export default UXAnimation;
