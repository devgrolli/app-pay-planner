export const formFields = {
  localName: {
    name: "name",
    rules: { required: "Local da compra é obrigatório" },
    label: "Nome (Local da Compra)",
  },
  date: {
    name: "date",
    rules: { required: "Data da Compra é obrigatória" },
    label: "Data da Compra",
  },
  category: {
    name: "category",
    rules: { required: "Categoria é obrigatória" },
    label: "Categoria da Compra",
  },
  typePayments: {
    name: "typePayments",
    rules: { required: "Tipo de compra é obrigatório" },
    label: "Tipo da Compra",
  },
  priceTotal: {
    name: "priceTotal",
    rules: { required: "Valor da compra é obrigatório" },
    label: "Valor da Compra",
  },
  qtyInstallments: {
    name: "qtyInstallments",
    rules: { required: "Quantidade de parcelas é obrigatória" },
    label: "Nº Parcelas",
  },
  hasInput: {
    name: "hasInput",
    rules: { required: "Seleção da entrada é obrigatória" },
    label: "Deu entrada?",
  },
  inputValue: {
    name: "inputValue",
    rules: { required: "Valor da entrada é obrigatório" },
    label: "Valor da Entrada",
  },
};

export const formBoolean = [{ label: "Não", value: false }, { label: "Sim", value: true }]