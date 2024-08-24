import { FC } from "react";
import { Header } from "./header";
import { LoadingProps } from "./type";
import LottieCustom from "@/utils/lottieCustom";
import success1 from "@/assets/json/success1.json";
import load from "@/assets/json/load.json";
import * as S from "../styles";

export const SheetDebitLoading: FC<LoadingProps> = ({
  loadingSubmit,
  handleDisplay,
  onSuccess,
}) => {
  return (
    <S.Container>
      <Header handleDisplay={handleDisplay} />
      {loadingSubmit ? (
        <>
          <LottieCustom
            width={290}
            height={290}
            animationData={success1}
            handleDisplay={onSuccess}
          />
          <S.ContainerSucess>
            <S.Label2>Cadastrado com sucesso!</S.Label2>
          </S.ContainerSucess>
        </>
      ) : (
        <LottieCustom animationData={load} height={250} width={250} speed={1.0} />
      )}
    </S.Container>
  )
};