import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { CommonColors } from "@/core/colors";
const { blue, green, grey, white, primary } = CommonColors;

interface ButtonProps {
  isLoading: boolean;
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${white};
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  margin: auto;
`;

const shouldForwardProp = (prop: string) => isPropValid(prop) && prop !== "isLoading";


export const ButtonLogin = styled.button.withConfig({
  shouldForwardProp
})<ButtonProps>`
  height: 60px;
  margin: 10px 0;
  width: 100%;
  background-color: ${({ isLoading }) => (isLoading ? grey : primary)};
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  color: ${white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 20px;
  letter-spacing: 1px;

  &:hover {
    background-color: ${({ isLoading }) => (isLoading ? "#3f4958" : "transparent")};
    color: ${({ isLoading }) => (isLoading ? grey : blue)};
    border-color: ${({ isLoading }) => (isLoading ? "none" : blue)};
    border-width: 2px;
    border-style: solid;
  }

  &:focus, &:active {
    outline: none;
    box-shadow: none;
    background-color: ${({ isLoading }) => (isLoading ? grey : primary)};
  }
`;

export const Title = styled.h1`
  font-size: 3.5;
  color: ${primary};
  text-align: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  object-fit: cover;
`;

export const BtnForgetPassword = styled.a`
  color: ${grey};
  margin-bottom: 20px;
`;

export const LabelBack = styled.a`
  cursor: pointer;
  color: ${green};
  margin-top: 15px;
`;