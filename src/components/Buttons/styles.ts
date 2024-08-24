import styled from "styled-components";
import { CommonColors } from "@/core/colors"
const { white, green, error } = CommonColors

interface BtnProps {
  fullWidth?: boolean;
}

export const ButtonLogout = styled.button`
  color: ${white};
  background-color: ${green};
  margin-right: 0px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonText = styled.button`
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: auto;
  margin: 5px;
`;

export const Close = styled(ButtonText)<BtnProps>`
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  border-color: ${error};
  color: ${error};
  width: ${({fullWidth}) => fullWidth ? "100%" : "auto" };
`;