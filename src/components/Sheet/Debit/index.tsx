import { FC } from "react";
import Drawer from "@mui/material/Drawer";
import { FilterBottomProps } from "./type";
import useSheetDebit from "./useSheetDebit";
import * as S from "../styles";
import { Header } from "./header";
import { ContentInstallments } from "./contentInstallments";
import { Footer } from "./footer";
import { SheetDebitLoading } from "./loading";
import { Content } from "./content";

export const SheetDebit: FC<FilterBottomProps> = ({
  open,
  loading,
  loadingSubmit,
  infoOperation,
  showInstallmentFields,
  onSuccess,
  handleDisplay,
  handleSubmit,
}) => {
  const { 
    options,
    nextStep,
    totalPaid,
    selectedValue,
    finalCalculate,
    loadingCalculate,
    setNextStep,
    handleChange,
    calculateTotal,
  } = useSheetDebit(open, infoOperation);

  return (
    <Drawer anchor="bottom" open={open} onClose={handleDisplay(false)}>
      {loading ? (
        <SheetDebitLoading 
          loadingSubmit={loadingSubmit}
          handleDisplay={handleDisplay}
          onSuccess={onSuccess}
        />
      ) : (
        <>
          <S.Container>
            <Header handleDisplay={handleDisplay} />

            {showInstallmentFields ? (
              <ContentInstallments
                totalPaid={totalPaid}
                nextStep={nextStep}
                finalCalculate={finalCalculate}
                loadingCalculate={loadingCalculate}
                infoOperation={infoOperation}
                selectedValue={selectedValue}
                options={options}
                calculateTotal={calculateTotal}
                handleChange={handleChange}
              />
            ) : (
              <Content priceTotal={infoOperation.value} />
            )}
          </S.Container>
          <Footer
            showInstallmentFields={showInstallmentFields}
            nextStep={nextStep}
            loading={loading}
            setNextStep={setNextStep}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </Drawer>
  );
};
