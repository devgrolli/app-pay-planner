import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "@/utils/MediaQuery";
import * as S from "./styles";
import { CommonColors } from "@/core/colors";

interface FooterPops {
  handleSubmit: () => void;
}

const Footer: React.FC<FooterPops> = ({ handleSubmit }) => {
  const isMobile = Boolean(MediaQuery());
  return isMobile ? (
    <S.ContainerFooter>
      <S.BtnSend onClick={() => handleSubmit()}>
        Enviar
        <FontAwesomeIcon
          icon={faPaperPlane}
          color="#fff"
          size="lg"
          style={{ marginLeft: 10 }}
        />
      </S.BtnSend>
      {/* <S.TextSend>Enviar Rastreio</S.TextSend> */}
    </S.ContainerFooter>
  ) : (
    <S.BtnSendDesk onClick={() => handleSubmit()}>
      Preparar envio
      <FontAwesomeIcon
        icon={faPaperPlane}
        color={CommonColors.greenLight}
        size="lg"
        style={{ paddingLeft: 10 }}
      />
    </S.BtnSendDesk>
  );
};

export default Footer;
