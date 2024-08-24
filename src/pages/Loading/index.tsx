import LottieCustom from "@/utils/lottieCustom";
import { Root, Container } from "./styles";
import loadingSpinner from "@/assets/json/loading-spinner.json";

const LoadingPage = () => {
  return (
    <Root>
      <Container>
        <LottieCustom animationData={loadingSpinner} height={250} width={250} />
      </Container>
    </Root>
  );
};

export default LoadingPage;
