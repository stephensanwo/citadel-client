import React from "react";
import Lottie from "react-lottie";
import SpinnerLottie from "../assets/lottie/spinner.json";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SpinnerLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "800px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default Spinner;
