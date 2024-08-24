import { CommonColors } from "@/core/colors";
import styled, { keyframes } from "styled-components";
const { secondary, secondaryLight, success, white, successLight } = CommonColors;

interface AlertProps {
  error?: boolean;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Alert = styled.div<AlertProps>`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  z-index: 10;
  background-color: ${({ error }) => error ? secondary : success};
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(14, 30, 37, 0.12) 10px 2px 4px 7px,
    rgba(14, 30, 37, 0.32) 0px 0px 16px 0px;
  animation: ${slideUp} 0.5s ease-out;

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

export const ContainerAlert = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const LabelAlert = styled.div`
  margin: 20px;
  color: ${white};
  font-weight: 600;
  letter-spacing: 0.1px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const ContainerLabel = styled.div`
    width: 70%;
  justify-content: flex-start;
`;

export const Icon = styled.div<AlertProps>`
    margin-left: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 15px;
  height: 45px;
  background-color: ${({ error }) => error ? secondaryLight : successLight};
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${white};
  cursor: pointer;
  padding: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
