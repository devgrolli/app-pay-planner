import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CommonColors } from "@/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LottieCustom from "@/utils/lottieCustom";
import IconError from "@/assets/json/icon-error.json";
import IconSuccess from "@/assets/json/success.json";
import * as S from "./styles";

interface AlertProps {
  message: string;
  error?: boolean;
  visibleAlert?: boolean;
  onClose?: () => void;
}

const AlertFooter = ({
  message,
  error,
  visibleAlert = true,
  onClose,
}: AlertProps) => {
  const [visible, setVisible] = useState(visibleAlert);

  useEffect(() => {
    setVisible(visibleAlert);
  }, [visibleAlert]);

  if (!visible) return null;

  console.log('error', error);

  return (
    <S.Alert error={error}>
      <S.ContainerAlert>
        <S.Icon error={error}>
          <LottieCustom animationData={error ? IconError : IconSuccess} height={60} width={60} />
        </S.Icon>
        <S.ContainerLabel>
          <S.LabelAlert>{message}</S.LabelAlert>
        </S.ContainerLabel>
        <S.CloseButton
          onClick={() => {
            setVisible(false);
            if (onClose) {
              onClose();
            }
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color={CommonColors.white}
            size="lg"
          />
        </S.CloseButton>
      </S.ContainerAlert>
    </S.Alert>
  );
};

export default AlertFooter;
