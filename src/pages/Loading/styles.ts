import styled from "styled-components";
import { CommonColors } from "@/core/colors";
const { green } = CommonColors;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EEEEEE;
  padding: 2rem;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${green};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

