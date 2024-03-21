import * as S from "./styles";
import Lottie from "react-lottie";

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
