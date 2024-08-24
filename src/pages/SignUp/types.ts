interface Option {
  name: string;
  label: string;
  value: string;
}

export const fieldsConfig = [
  {
    name: "fullName",
    label: "Nome Completo",
    type: "text",
    rules: { required: "Nome é obrigatório" },
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    rules: { required: "Email é obrigatório" },
  },
  {
    name: "phone",
    label: "Telefone",
    type: "text",
    mask: "(99) 99999-9999",
    rules: { required: "Telefone é obrigatório" },
  },
  {
    name: "password",
    label: "Senha",
    type: "password",
    rules: { required: "Senha é obrigatória" },
  },
  {
    name: "repeatPassword",
    label: "Repita a senha",
    type: "password",
    rules: { required: "Confirmação de senha é obrigatória" },
  },
];