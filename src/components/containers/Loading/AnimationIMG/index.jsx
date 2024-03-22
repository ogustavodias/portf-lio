import * as S from "./styles";

import animationData from "./json/animation.json";
import Lottie from "react-lottie";

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
    <S.AnimationIMG>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={false}
        isPaused={false}
      />
    </S.AnimationIMG>
  );
};

export default AnimationIMG;
