// Styles with styled-components
import * as S from "./styles";

// Libraries & frameworks imports
import Lottie from "react-lottie";

// SRC of animation file
import animationData from "./json/animation.json";

const AnimationIMG = ({ play }) => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.AnimationIMG>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={play ? false : true}
        isPaused={false}
      />
    </S.AnimationIMG>
  );
};

export default AnimationIMG;
