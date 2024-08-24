import { waveAnimation } from "@/pages/OrderTracking/styles";
import styled from "styled-components";

interface SkeleProps {
  isMobile?: boolean;
}

interface CenteredDivProps {
  marginTop: number;
}

export const SkeletonWrapper = styled.div<SkeleProps>`
  position: relative;
  overflow: hidden;
  background: #e1e0e0;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 30px;

  &::before {
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transform: translateX(-100%);
    animation: ${waveAnimation} 2s infinite;
  }
`;

export const CenteredDiv = styled.div<CenteredDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;

export const ContainerSkeleton = styled.div<SkeleProps>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "75%")};
`;