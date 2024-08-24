import { FC } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { StyleSheetManager } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonLogout } from "../styles";
import isPropValid from "@emotion/is-prop-valid";
import { CommonColors } from "@/core/colors";

interface ButtonLoggoutProps {
  handleOpenModal: () => void;
}

export const ButtonLoggout: FC<ButtonLoggoutProps> = ({ handleOpenModal }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ButtonLogout onClick={handleOpenModal}>
        Sair
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ paddingLeft: 5, color: CommonColors.white }}
        />
      </ButtonLogout>
    </StyleSheetManager>
  );
};
