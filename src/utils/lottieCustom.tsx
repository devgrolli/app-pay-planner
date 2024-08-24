import Lottie, { LottieProps, Options } from "react-lottie";

interface LottieCustomProps extends Omit<LottieProps, "options"> {
  animationData: any;
  height: number;
  width?: number;
  handleDisplay?: () => void;
}

const LottieCustom: React.FC<LottieCustomProps> = ({
  animationData,
  height,
  width,
  handleDisplay,
  ...props
}) => {
  const defaultOptions: Options = {
    loop: !handleDisplay,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const eventListeners: ReadonlyArray<{ eventName: 'complete'; callback: () => void }> = handleDisplay
    ? [
        {
          eventName: "complete",
          callback: () => {
            handleDisplay();
          },
        },
      ]
    : [];

  return (
    <Lottie
      eventListeners={eventListeners}
      options={defaultOptions}
      height={height}
      width={width}
      {...props}
    />
  );
};

export default LottieCustom;