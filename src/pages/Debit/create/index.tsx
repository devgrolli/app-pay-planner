import Header from "@/components/Header";
import { Input } from "@/components/Inputs/Input";
import { Controller } from "react-hook-form";
import { formatReais } from "@/utils/formatReais";
import { SelectInput } from "@/components/Inputs/SelectInput";
import { optionsCategory } from "../types/optionsCategory";
import { SheetDebit } from "@/components/Sheet/Debit";
import AlertFooter from "@/components/AlertFooter";
import useClient from "./useClient";
import * as S from "./styles";
import { optionsPayment } from "../types/optionsPayments";
import { formBoolean, formFields } from "../types/formFields"

const CreateDebit = () => {
  const {
    price,
    error,
    control,
    loading,
    openSheet,
    loadingSubmit,
    isInputDisabled,
    showInstallmentFields,
    onSuccess,
    setFocus, 
    navigate,
    onSubmit,
    handleSubmit,
    onCloseAlert,
    handleDisplay,
    getErrorProps,
    handleOpenSheet,
    handleInputChange,
    handleTypePaymentsChange,
  } = useClient();

  return (
    <S.Root>
      <Header handleClickOpen={() => null} />
      <S.Label>Cadastre</S.Label>
      <S.SubLabel>Insira as informações de seus gastos mensais e novos gastos.</S.SubLabel>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={formFields.localName.name}
          control={control}
          defaultValue=""
          rules={formFields.localName.rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const errorProps = getErrorProps(error);
            return (
              <Input
                withBorderColor
                fullWidth
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label={formFields.localName.label}
                error={!!error}
                color={errorProps.color}
                bottom={errorProps.bottom}
                helperText={errorProps.message}
              />
            )
          }}
        />

        <Controller
          name={formFields.date.name}
          control={control}
          defaultValue=""
          rules={formFields.date.rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const errorProps = getErrorProps(error);
            return (
              <Input
                withBorderColor
                fullWidth
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label={formFields.date.label}
                error={!!error}
                color={errorProps.color}
                bottom={errorProps.bottom}
                helperText={errorProps.message}
              />
            )
          }}
        />

        <Controller
          name={formFields.priceTotal.name}
          control={control}
          defaultValue=""
          rules={formFields.priceTotal.rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const errorProps = getErrorProps(error);
            return (
              <Input
                withBorderColor
                fullWidth
                type="text"
                value={formatReais(value)}
                onChange={(e) => onChange(formatReais(e.target.value))}
                label={formFields.priceTotal.label}
                error={!!error}
                color={errorProps.color}
                bottom={errorProps.bottom}
                helperText={errorProps.message}
              />
            )
          }}
        />

        <Controller
          name={formFields.category.name}
          control={control}
          defaultValue=""
          rules={formFields.category.rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const errorProps = getErrorProps(error);
            return (
              <SelectInput
                fullWidth
                value={value}
                onChange={(e) => onChange(e)}
                label={formFields.category.label}
                options={optionsCategory || []}
                error={!!error}
                color={errorProps.color}
                bottom={errorProps.bottom}
                helperText={errorProps.message}
              />
            )
          }}
        />

        <Controller
          name={formFields.typePayments.name}
          control={control}
          defaultValue=""
          rules={formFields.typePayments.rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const errorProps = getErrorProps(error);
            return (
              <SelectInput
                fullWidth
                value={value}
                onChange={(e) => handleTypePaymentsChange(e, onChange)}
                label={formFields.typePayments.label}
                options={optionsPayment || []}
                error={!!error}
                color={errorProps.color}
                bottom={errorProps.bottom}
                helperText={errorProps.message}
              />
            )
          }}
        />

        {showInstallmentFields && (
          <>
            <S.InputRow isVisible={showInstallmentFields}>
            <Controller
                name={formFields.hasInput.name}
                control={control}
                rules={formFields.hasInput.rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  const errorProps = getErrorProps(error);
                  return (
                    <SelectInput
                      value={value}
                      onChange={(e) => handleInputChange(e, onChange)}
                      label={formFields.hasInput.label}
                      options={formBoolean}
                      error={!!error}
                      fullWidth
                      color={errorProps.color}
                      bottom={errorProps.bottom}
                      helperText={errorProps.message}
                    />
                  )
                }}
              />
            </S.InputRow>

            <S.InputRow isVisible={showInstallmentFields}>
              
            <Controller
                name={formFields.qtyInstallments.name}
                control={control}
                defaultValue=""
                rules={formFields.qtyInstallments.rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  const errorProps = getErrorProps(error);
                  return (
                    <Input
                      hasMoreInfo
                      withBorderColor
                      type="number"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      label={formFields.qtyInstallments.label}
                      error={!!error}
                      styles={{ width: "60%" }}
                      color={errorProps.color}
                      bottom={errorProps.bottom}
                      helperText={errorProps.message}
                    />
                  )
                }}
              />
              <Controller
                name={formFields.inputValue.name}
                control={control}
                defaultValue=""
                rules={formFields.inputValue.rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  const errorProps = getErrorProps(error);
                  return (
                    <Input
                      withBorderColor
                      value={isInputDisabled ? "" : formatReais(value)}
                      onChange={(e) => {
                        if (!isInputDisabled) {
                          onChange(formatReais(e.target.value));
                        }
                      }}
                      label={formFields.inputValue.label}
                      error={!!error}
                      styles={{ width: "60%" }}
                      disabled={isInputDisabled}
                      color={errorProps.color}
                      bottom={errorProps.bottom}
                      helperText={errorProps.message}
                    />
                  )
                }}
              />
            </S.InputRow>
          </>
        )}

        <SheetDebit
          showInstallmentFields={showInstallmentFields}
          loadingSubmit={loadingSubmit}
          loading={loading}
          open={openSheet}
          infoOperation={price}
          onSuccess={onSuccess}
          handleDisplay={handleDisplay}
          handleSubmit={() => handleSubmit(onSubmit)()}
        />
      </S.Form>

      <S.BtnSubmit onClick={handleOpenSheet}>
        Cadastrar
      </S.BtnSubmit>

      <S.BtnBack onClick={() => navigate("/list-clients")}>
        Voltar
      </S.BtnBack>

      <AlertFooter
        error={error.visible}
        message={error.msg}
        visibleAlert={error.visible}
        onClose={onCloseAlert}
      />
    </S.Root>
  );
};

export default CreateDebit;
