enum CreateDebitActionTypes {
  SET_NAME = "SET_NAME",
  SET_CATEGORY = "SET_CATEGORY",
  SET_INSTALLMENTS = "SET_INSTALLMENTS",
  SET_QTY_INSTALLMENTS = "SET_QTY_INSTALLMENTS",
  SET_VALUE = "SET_VALUE",
}
  
  interface SetNameAction {
    type: CreateDebitActionTypes.SET_NAME;
    payload: string;
  }
  
  interface SetCategoryAction {
    type: CreateDebitActionTypes.SET_CATEGORY;
    payload: string;
  }
  
  interface SetInstallmentsAction {
    type: CreateDebitActionTypes.SET_INSTALLMENTS;
    payload: string;
  }
  
  interface SetQtyInstallmentsAction {
    type: CreateDebitActionTypes.SET_QTY_INSTALLMENTS;
    payload: string;
  }
  
  interface SetValueAction {
    type: CreateDebitActionTypes.SET_VALUE;
    payload: string;
  }
  
  type CreateDebitAction =
    | SetNameAction
    | SetCategoryAction
    | SetInstallmentsAction
    | SetQtyInstallmentsAction
    | SetValueAction;
  
  const initialState = {
    name: "",
    category: "",
    installments: "",
    qtyInstallments: "",
    value: "",
  };
  
  const createDebitReducer = (state = initialState, action: CreateDebitAction) => {
    switch (action.type) {
      case CreateDebitActionTypes.SET_NAME:
        return { ...state, name: action.payload };
      case CreateDebitActionTypes.SET_CATEGORY:
        return { ...state, category: action.payload };
      case CreateDebitActionTypes.SET_INSTALLMENTS:
        return { ...state, installments: action.payload };
      case CreateDebitActionTypes.SET_QTY_INSTALLMENTS:
        return { ...state, qtyInstallments: action.payload };
      case CreateDebitActionTypes.SET_VALUE:
        return { ...state, value: action.payload };
      default:
        return state;
    }
  };
  
  export default createDebitReducer;