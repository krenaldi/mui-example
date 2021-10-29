import { useLottie } from "lottie-react";
import automationAnimation from "../../animations/automationAnimation/data.json";

const animationStyle = {
  maxHeight: 290,
  maxWidth: 280,
};

const AutomationAnimation = () => {
  const options = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, animationStyle);

  return View;
};

export default AutomationAnimation;
