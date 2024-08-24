import styled from "styled-components";
import { CommonColors } from "@/core/colors";
const { blue, greenLight, error, white } = CommonColors;

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

export const OpenOrder = styled(ButtonText)`
  background-color: ${greenLight};
`;

export const Close = styled(ButtonText)`
  background-color: ${error};
  color: ${white};
  width: 100%;
`;
