import React, { useEffect, useState } from "react";
import { ContainerLabel, RotatingText } from "./styles";

interface TypingAnimationProps {
  phrases: string[];
  color?: string;
}

const AnimateLabel: React.FC<TypingAnimationProps> = ({ phrases, color }) => {
  const [index, setIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEntering(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsEntering(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <ContainerLabel>
      <RotatingText color={color} isEntering={isEntering}>
        {phrases[index]}
      </RotatingText>
    </ContainerLabel>
  );
};

export default AnimateLabel;
