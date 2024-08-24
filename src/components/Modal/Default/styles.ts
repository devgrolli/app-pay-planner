import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { CommonColors } from "@/core/colors";
const { blue, green, error, grey, white } = CommonColors;

interface ButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
}

export const ButtonText = styled.button`
  color: ${blue};
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: auto;
  margin: 5px;
`;

const shouldForwardProp = (prop: string) => isPropValid(prop) && prop !== "isLoading";

export const Confirm = styled(ButtonText).withConfig({
  shouldForwardProp,
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${green};
  background-color: transparent;
  color: ${green};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  strong {
    display: flex;
    align-items: center;
  }

  .spinner {
    margin-left: 10px;
  }
`;

