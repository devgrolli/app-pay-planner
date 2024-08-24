import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import * as S from "../styles";

export const Header: FC<{ handleDisplay: (open: boolean) => (event: React.MouseEvent<Element, MouseEvent>) => void }> = ({ handleDisplay }) => (
  <S.Header>
    <S.CloseButtonContainer onClick={handleDisplay(false)}>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </S.CloseButtonContainer>
  </S.Header>
);