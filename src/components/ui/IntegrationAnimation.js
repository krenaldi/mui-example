import { useLottie } from "lottie-react";
import integrationAnimation from "../../animations/integrationAnimation/data.json";

const animationStyle = {
  maxWidth: "20em",
};

const IntegrationAnimation = () => {
  const options = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, animationStyle);

  return View;
};

export default IntegrationAnimation;
