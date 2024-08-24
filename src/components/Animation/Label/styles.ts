import { CommonColors } from '@/core/colors';
import styled, { keyframes } from 'styled-components';

interface RotaingProps {
  isEntering: boolean;
  color?: string;
}

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const RotatingText = styled.div<RotaingProps>`
  display: inline-block;
  animation: ${({isEntering}) => isEntering ? slideInUp : slideOutUp} 0.5s ease-in-out;
  color: ${({ color }) => (color ? color : CommonColors.blue)};
  font-size: 16px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
