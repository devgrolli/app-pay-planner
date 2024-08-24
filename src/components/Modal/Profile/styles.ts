import styled from "styled-components";
import { CommonColors } from "@/core/colors";
import { TextField } from "@mui/material";

const { blue, green, white, error } = CommonColors;

export const ButtonText = styled.button`
  color: ${blue};
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: auto;
  margin: 5px;

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export const BtnSave = styled(ButtonText)`
border-width: 1px;
  border-style: solid;
  border-color: ${green};
  background-color: transparent;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: auto;
  color: ${green};
`;

export const CssTextField = styled(TextField)`
  & label {
    color: red;
  }
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: yellow;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: yellow;
    }
  }
`;
