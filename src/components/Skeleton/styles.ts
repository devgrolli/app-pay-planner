import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  color?: string;
  height?: number;
  bottom?: number;
}

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Skeletons = styled.div<SkeletonProps>`
  position: relative;
  overflow: hidden;
  background: ${({ color }) => color || '#ffff'};
  height:  ${({ height }) => `${height}px` || '100px'};
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: ${({ bottom }) => `${bottom}px` || '20px'};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, #ffff, transparent);
    transform: translateX(-100%);
    animation: ${waveAnimation} 1.6s infinite;
  }
`;