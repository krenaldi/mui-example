import { useLottie } from "lottie-react";
import techAnimation from "../../animations/technologyAnimation/data.json";

const animationStyle = {
  maxWidth: "40em",
  margin: 0
};

const TechAnimation = () => {
  const options = {
    loop: true,
    autoplay: false,
    animationData: techAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, animationStyle);

  return View;
};

export default TechAnimation;
