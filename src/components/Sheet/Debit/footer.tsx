import { FC } from "react";
import loadingSpinner from "@/assets/json/loading-spinner.json";
import LottieCustom from "@/utils/lottieCustom";
import * as S from "../styles";

export const Footer: FC<{
    showInstallmentFields: boolean;
    nextStep: boolean;
    loading: boolean;
    setNextStep: (value: boolean) => void;
    handleSubmit: () => void;
  }> = ({ showInstallmentFields, nextStep, loading, setNextStep, handleSubmit }) => (
    <S.Footer>
      {nextStep || !showInstallmentFields ? (
        <S.Submit onClick={handleSubmit} disabled={loading} isLoading={loading}>
          {loading ? (
            <LottieCustom animationData={loadingSpinner} height={35} width={35} speed={1.5} />
          ) : (
            <>Confirmar</>
          )}
        </S.Submit>
      ) : (
        <>
          <S.BtnConfirm onClick={() => setNextStep(true)}>Sim</S.BtnConfirm>
          <S.BtnNotConfirm onClick={handleSubmit}>Não</S.BtnNotConfirm>
        </>
      )}
    </S.Footer>
  );