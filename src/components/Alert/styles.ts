import { CommonColors } from "@/core/colors";
import styled, { keyframes } from "styled-components";
const { secondaryLight, white, secondary } = CommonColors;

const animloader = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${animloader} 0.5s;
  margin-top: 10px;
  width: 100%;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3);
  height: auto;
  background-color: ${secondary};
  border-radius: 15px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${white};
  display: flex;
  align-items: center;
  word-break: break-all;
  margin-right: 10px;
  letter-spacing: 0.8px;
`;

export const IconMsg = styled.div`
  background-color: ${secondaryLight};
  margin: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`;