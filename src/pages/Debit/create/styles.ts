import styled, { keyframes } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { CommonColors } from "@/core/colors";
const { blue, greenLight, root, white, primary, green } = CommonColors;
const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && prop !== "isLoading";

interface DefaultProps {
  isMobile?: boolean;
  isLoading?: boolean;
  isVisible?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${white};
  padding: 25px;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const Label = styled.p`
  margin-top: 90px;
  font-weight: 500;
  font-size: 24px;
  color: ${blue};
`;

export const SubLabel = styled.p`
margin-top: -20px;
margin-bottom: 30px;
margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  color: ${blue};
`;

export const ContainerInput = styled.div<DefaultProps>`
  margin: ${({ isMobile }) =>
    isMobile ? "0px 20px 0px 20px" : "0px 50px 0px 50px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<DefaultProps>`
  margin-top: 100px;
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${white};
`;

export const BtnSubmit = styled.button.withConfig({
  shouldForwardProp,
})<DefaultProps>`
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  color: ${white};
  width: 100%;
  height: 50px;
  font-weight: 700;
  border-color: ${primary};
  border-radius: 15px;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ isLoading }) => (isLoading ? "transparent": primary )};
`;

export const BtnBack = styled.button`
  color: ${green};
  border-width: 1px;
  border-style: solid;
  border-radius: 15px;
  font-weight: 700;
  background-color: transparent;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WhatsIs = styled.button`
  background-color: transparent;
  margin-top: -32px;
  height: 50px;
  width: 30%;
  align-items: center;
  display: flex;
  color: ${primary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const InputRow = styled.div<DefaultProps>`
  display: flex;
  gap: 20px;
  /* margin-bottom: 20px; */
  max-height: ${({ isVisible }) => (isVisible ? "300px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-20px)")};
  transition: 
    max-height 0.9s ease-in-out,
    opacity 0.9 ease-in-out,
    transform 0.9 ease-in-out;
`;

export const Form = styled.form`
  width: 100%;
`;