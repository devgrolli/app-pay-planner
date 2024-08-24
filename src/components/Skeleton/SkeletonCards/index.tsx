import React, { useState, useEffect } from "react";
import MediaQuery from "@/utils/MediaQuery";
import { SkeletonWrapper, CenteredDiv, ContainerSkeleton } from "./styles";
import useWindowResize from "@/utils/useWindowResize";

export function SkeletonCards() {
  const isMobile = Boolean(MediaQuery());
  const windowWidth = useWindowResize(() => {});

  // Função para calcular a marginTop baseada na largura da janela
  const calculateMarginTop = (width: number) => {
    const minMargin = 100; // O delta mínimo
    const maxMarginPercentage = 0.1; // Máximo de 10% da largura da janela

    // Calcular a marginTop como uma porcentagem da largura da janela
    const marginTop = width * maxMarginPercentage;

    // Garantir que a marginTop não seja menor que o delta mínimo
    return Math.max(minMargin, marginTop);
  };

  const marginTop = calculateMarginTop(windowWidth);

  return (
    <CenteredDiv marginTop={marginTop}>
      <ContainerSkeleton isMobile={isMobile}>
        <SkeletonWrapper />
        <SkeletonWrapper />
        <SkeletonWrapper />
        <SkeletonWrapper />
      </ContainerSkeleton>
    </CenteredDiv>
  );
}
