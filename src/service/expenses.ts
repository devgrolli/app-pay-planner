import { api } from "./api";

const endpoints = {
  EXPENSES: "/expenses/create",
};

export const createFinancialExpenses = async (body: any) => {
  try {
    const response = await api.post(
      endpoints.EXPENSES,
      body,
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao cadastrar produto:", error);
    throw error;
  }
};

export default {
  createFinancialExpenses,
};
