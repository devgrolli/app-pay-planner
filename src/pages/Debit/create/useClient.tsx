import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MediaQuery from "@/utils/MediaQuery";
import { PaymentType } from "../types/optionsPayments";
import { CommonColors } from "@/core/colors";
import { createFinancialExpenses } from "@/service/expenses";
import { set } from "date-fns";

const useClient = () => {
  const navigate = useNavigate();
  const { control, setFocus, handleSubmit, getValues, reset, trigger } = useForm();
  const [error, setError] = useState({ visible: false, msg: "" });
  const [price, setPrice] = useState({ value: "", qty: "", hasInput: false, priceInput: "" });
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [showInstallmentFields, setShowInstallmentFields] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleTypePaymentsChange = (e: React.ChangeEvent<{ value: unknown }>, onChange: Function) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);

    if (selectedValue === PaymentType.CREDIT_CARD || selectedValue === PaymentType.LOAN) {
      setShowInstallmentFields(true);
    } else {
      setShowInstallmentFields(false);
      resetFormFields();
    }
  };

  const resetFormFields = () => {
    const currentValues = getValues();
    reset({
      ...currentValues,
      qtyInstallments: "",
      hasInput: false,
      inputValue: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<{ value: unknown }>, onChange: Function) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
    setIsInputDisabled(selectedValue === false);
  };

  const getErrorProps = (error: any) => ({
    bottom: error ? 10 : 30,
    color: error ? CommonColors.secondary : CommonColors.green,
    message: error ? error.message : "",
  });

  const onSuccess = () => {
    setOpenSheet(false);
    navigate("/");
  }

  const onSubmit = async (data: any) => {
    const userId = localStorage.getItem("userId")
    setLoadingSubmit(false)
    setLoading(true);

    const body = {
      ...data,
      userId,
    }
    
    try {
      await createFinancialExpenses(body);
      setLoadingSubmit(true);
    } catch (err: any) {
      setOpenSheet(false);
      setError({ visible: true, msg: err.response.data.message });
      setLoading(false);
      setLoadingSubmit(false);
    }
  };

  const onCloseAlert = () => {
    setError({ visible: false, msg: "" });
  };

  const handleOpenSheet = async () => {
    const isValid = await trigger(["name", "date", "category", "priceTotal", "qtyInstallments", "typePayments"]);

    if (isValid) {
      setOpenSheet(true);
      setPrice({
        value: getValues().priceTotal,
        qty: getValues().qtyInstallments,
        hasInput: getValues().hasInput,
        priceInput: getValues().inputValue,
      });
    }
  };

  const toggleDrawer = (setter: (open: boolean) => void) => 
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
         (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setter(open);
    };
  
  const handleDisplay = toggleDrawer(setOpenSheet);

  return {
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
  };
};

export default useClient;
