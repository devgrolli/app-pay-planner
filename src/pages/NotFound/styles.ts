import styled from "styled-components";
import { CommonColors } from "@/core/colors";
const { darkPurple } = CommonColors.notFoundPage;
const { green, white, blue } = CommonColors;

export const DivLottie = styled.div`
  @media (min-width: 900px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${white};
  box-sizing: border-box;
`;

export const DivText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${green};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: auto;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${green};
  letter-spacing: 1px;
  color: ${white};
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
  margin-top: 10%;

  &:hover {
    background-color: ${green};
    color: ${blue};
    border-color: ${green};
  }
`;
