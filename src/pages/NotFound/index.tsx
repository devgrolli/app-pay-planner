import { Root, Text, Container, Button, DivText, DivLottie } from "./styles";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useWindowResize from "@/utils/useWindowResize";
import LottieCustom from "@/utils/lottieCustom";
import NotFound from "@/assets/json/not-found-dinassord.json";

const NotFoundPage = ({
  message = "Página não encontrada ou sem autorização",
}) => {
  const windowWidth = useWindowResize(() => {});
  const navigate = useNavigate();

  return (
    <Root>
      <Container>
        <DivText>
          <Text>{message}</Text>
        </DivText>

        <DivLottie>
          <LottieCustom
            animationData={NotFound}
            height={400}
            width={windowWidth - 400}
          />
        </DivLottie>

        <Button onClick={() => navigate("/login")}>
          Faça o Login
          <FontAwesomeIcon
            icon={faRightToBracket}
            style={{ paddingLeft: 10 }}
          />
        </Button>
      </Container>
    </Root>
  );
};

export default NotFoundPage;
