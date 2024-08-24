import { useEffect, useRef, useState } from "react";
import { InfoOperation } from "./type";
import { fortmatNumberToReais } from "@/utils/formatReais";
import { set } from "date-fns";

const useSheetDebit = (open: boolean, infoOperation: InfoOperation) => {
  const [nextStep, setNextStep] = useState(false);
  const [selectedValue, setSelectedValue] = useState('0');
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [finalCalculate, setFinalCalculate] = useState(false);
  const totalPaid = useRef('');

  useEffect(() => {
    if (open) {
      setNextStep(false);
      setSelectedValue('0');
      setLoadingCalculate(false);
      setFinalCalculate(false);
    }
  }, [open]);

  const handleChange = (event: any) => {
    setLoadingCalculate(true)
    setTimeout(() => {
      setSelectedValue(event.target.value);
      setLoadingCalculate(false);
      setFinalCalculate(true);
    }, 2000)
  };
  
  const formatFloat = (value: string) => {
    const cleanedValue = value.replace(/[^\d,]/g, '');
    const normalizedValue = cleanedValue.replace(',', '.');
    return parseFloat(normalizedValue);
  }
    
  const calculateTotal = () => {
    const { hasInput, priceInput, qty, value } = infoOperation;

    if (hasInput) {
      const priceFinal = formatFloat(value) - formatFloat(priceInput);
      const total = priceFinal / Number(qty);

      totalPaid.current = fortmatNumberToReais(total * Number(selectedValue));

      return fortmatNumberToReais(total);
    }
    
    const numericValue = formatFloat(value);
    const total = numericValue / Number(infoOperation.qty);
    return fortmatNumberToReais(total);
  }
    
  const options = [
    { label: 'Nenhuma', value: '0' },
    ...Array.from({ length: Number(infoOperation.qty) }, (_, i) => ({
        label: `${i + 1}x`,
        value: `${i + 1}`
    }))
  ];

  return {
    options,
    nextStep,
    totalPaid,
    selectedValue,
    finalCalculate,
    loadingCalculate,
    setFinalCalculate,
    setNextStep,
    handleChange,
    calculateTotal
  }
}

export default useSheetDebit;