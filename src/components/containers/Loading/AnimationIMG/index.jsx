// Libraries & frameworks imports
import Lottie from "react-lottie";

// SRC of animation file
import animationData from "./json/animation.json";

const AnimationIMG = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default AnimationIMG;
