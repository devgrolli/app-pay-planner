type HandleDisplay<T = React.KeyboardEvent | React.MouseEvent> = (open: boolean) => (event: T) => void;


export interface InfoOperation {
  value: string;
  qty: string;
  hasInput: boolean;
  priceInput: string;
}

export interface FilterBottomProps {
  open: boolean;
  showInstallmentFields: boolean;
  loading: { loading: boolean, submitting: boolean} | boolean;
  loadingSubmit: boolean;
  infoOperation: InfoOperation;
  onSuccess: () => void;
  handleDisplay: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  handleSubmit: () => void;
}

export interface LoadingProps {
  loadingSubmit: boolean;
  handleDisplay: (open: boolean) => (event: React.MouseEvent<Element, MouseEvent>) => void;
  onSuccess: () => void;
}