import { useLottie } from "lottie-react";
import documentsAnimation from "../../animations/documentsAnimation/data.js";

const animationStyle = {
  maxHeight: 275,
  maxWidth: 275,
  minHeight: 250,
};


const DocumentsAnimation = () => {
  const documentOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(documentOptions, animationStyle);

  return View;
};

export default DocumentsAnimation;
