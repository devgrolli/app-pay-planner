import styled from "styled-components";
import { CommonColors } from "@/core/colors";

const { blue, greenLight, green } = CommonColors;

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

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const BtnExclude = styled.button`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: auto;
  margin: 5px;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  border-color: ${green};
  color: ${green};

`;
