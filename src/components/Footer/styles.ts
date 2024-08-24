import styled from "styled-components";
import { CommonColors } from "@/core/colors";

export const ContainerFooter = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: ${CommonColors.blue};
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(14, 30, 37, 0.12) 10px 2px 4px 7px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media (min-width: 1000px) {
    width: 50%;
    bottom: 20px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 20px;
  }
`;

export const TextSend = styled.p`
  color: ${CommonColors.white};
  font-weight: bold;
  font-size: 16px;
`;

export const BtnSendDesk = styled.button`
  color: ${CommonColors.greenLight};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  width: 50%;
  background-color: ${CommonColors.blue};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 28px,
    rgba(0, 0, 0, 0.22) 0px 1px 10px;
`;

export const BtnSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${CommonColors.white};
  font-weight: bold;
  font-size: 18px;
  background-color: ${CommonColors.greenLight};
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: 10px;
  height: 40px;
  /* width: 70px; */
  border-radius: 15px;
`;
