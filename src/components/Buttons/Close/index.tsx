import { FC } from "react";
import { Close } from "../styles";

interface ButtonCloseProps {
  handleClose: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const BtnClose: FC<ButtonCloseProps> = ({
  handleClose,
  disabled,
  fullWidth = false,
}) => {
  return (
    <Close onClick={handleClose} disabled={disabled} fullWidth={fullWidth}>
      Fechar
    </Close>
  );
};
