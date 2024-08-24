import styled, { keyframes } from "styled-components";
import { CommonColors } from "@/core/colors";
import isPropValid from "@emotion/is-prop-valid";
const shouldForwardProp = (prop: string) => isPropValid(prop) && prop !== "isLoading";
const { success, white,grey, primary } = CommonColors;

interface DefaultProps {
  isMobile?: boolean;
  isLoading?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: ${primary};
`;

export const Label = styled.p`
  font-size: 22px;
  display: inline-block;
  color: ${primary};
`;

export const Label2 = styled.p`
  font-size: 16px;
  display: inline-block;
  color: ${grey};
  margin-top: -10px;
`;

export const LabelReais = styled.p`
  display: inline-block;
  font-size: 21px;
  color: ${success};
  font-weight: 600;
  padding-left: 5px;
`;

export const ContainerLabels = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: -30px;
`;

export const Submit = styled.button<DefaultProps>`
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  color: ${white};
  width: 100%;
  height: ${({ isLoading }) => (isLoading ? "none":  "60px")};
  font-size: 18px;
  align-items: center;
  letter-spacing: 1px;
  border-color: ${({ isLoading }) => (isLoading ? primary : "none" )};
  border-width: 1px;
  border-style: solid;
  border-radius: 15px;
  background-color: ${({ isLoading }) => (isLoading ? "transparent": primary )};
`;

export const BtnConfirm = styled(Submit)<DefaultProps>`
  margin-bottom: 15px;
`;

export const BtnNotConfirm = styled.button`
  color: ${primary};
  height: 60px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  border-color: ${primary};
  color: ${primary};
  border-radius: 15px;
`;

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20%;
`;

export const Header = styled.div`
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const CloseButtonContainer = styled.div`
  margin-left: auto;
  margin-right: -13px;
`;

export const Content = styled.div`
  margin-top: -10px;
`;

export const SelectInputContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ContainerSucess = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;