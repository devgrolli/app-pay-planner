import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { CommonColors } from "@/core/colors";
const { blue, grey, white, primary, secondaryLight } = CommonColors;

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

export const ButtonLogin = styled.button`
  height: 60px;
  margin: 10px 0;
  width: 100%;
  background-color: ${primary};
  opacity: 1;
  color: ${white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const BtnRegister = styled(ButtonLogin)`
  background-color: ${secondaryLight};
`;

export const LabelWelcome = styled.p`
  margin-top: -10px;
  margin-bottom: 100px;
  color: ${grey};
  font-size: 16px;
`;

export const Title = styled.h1`
  font-size: 3.5;
  color: ${primary};
  text-align: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const BtnForgetPassword = styled.a`
  color: ${primary};
  margin-bottom: 20px;
`;

export const TextRegister = styled.p`
  color: ${grey};
`;