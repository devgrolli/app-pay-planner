import { FC } from "react";
import { Skeleton } from "@/components/Skeleton";
import { SelectInput } from "@/components/Inputs/SelectInput";
import { CommonColors } from "@/core/colors";
import * as S from "../styles";

interface ContentInstallmentsProps {
  totalPaid: any;
  nextStep: boolean;
  finalCalculate: boolean;
  loadingCalculate: boolean;
  infoOperation: any;
  selectedValue: any;
  options: any[];
  calculateTotal: () => string;
  handleChange: (event: any) => void;
}

export const ContentInstallments: FC<ContentInstallmentsProps> = ({
    nextStep,
    totalPaid,
    finalCalculate,
    loadingCalculate,
    infoOperation,
    selectedValue,
    options,
    calculateTotal,
    handleChange,
  }) => {
  const remainingPayable = Number(infoOperation.qty) - Number(selectedValue);
  
  
    return (
      <S.Content>
        <S.ContainerLabels>
          {finalCalculate ? (
            <S.Label>Resumo</S.Label>
          ) : (
            nextStep ? (
              <>
                <S.Label>Valor da parcela</S.Label>
                <S.LabelReais>{calculateTotal()}</S.LabelReais>
              </>
            ) : (
              <S.Label>Quase lá!</S.Label>
            )
          )}
        </S.ContainerLabels>
  
        {nextStep ? (
          loadingCalculate ? (
            <>
              <Skeleton color={CommonColors.greyLight} height={50} bottom={25} />
              <Skeleton color={CommonColors.greyLight} height={50} bottom={25} />
            </>
          ) : (
            finalCalculate ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <S.Label2>Total da Compra <strong>{infoOperation.value}</strong></S.Label2>
                {infoOperation.hasInput && <S.Label2>Valor da entrada <strong>{infoOperation.priceInput}</strong></S.Label2>}
                <S.Label2>Valor da Parcela <strong>{calculateTotal()}</strong></S.Label2>
                <S.Label2>Total já pago <strong>{totalPaid.current}</strong></S.Label2>
                <S.Label2>Quantidade de parcelas pagas <strong>{selectedValue}</strong></S.Label2>
                <S.Label2>Quantidade de parcelas à pagar <strong>{remainingPayable}</strong></S.Label2>
                <S.Label2>Quantidade de parcelas das compra <strong>{infoOperation.qty}</strong></S.Label2>
              </div>
            ) : (
              <>
                <S.Label2>Quantas parcelas você já pagou? Selecione abaixo e confirme</S.Label2>
                <S.SelectInputContainer>
                  <SelectInput
                    fullWidth
                    value={selectedValue}
                    onChange={handleChange}
                    color={CommonColors.green}
                    label="Fatura pagas"
                    options={options}
                  />
                </S.SelectInputContainer>
              </>
            )
          )
        ) : (
          <S.Label2>Você já pagou alguma parcela desta compra no cartão de crédito?</S.Label2>
        )}
      </S.Content>
    );
  };