import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export enum PaymentType {
  PIX = 'pix',
  MONEY = 'money',
  CREDIT_CARD = 'creditCard',
  DEBIT_CARD = 'debitCard',
  LOAN = 'financiamento',
}

interface Option {
  label: string;
  value: string;
  icon: JSX.Element;
}

const iconMap: Record<string, JSX.Element> = {
  pix: <PixIcon style={{ color: "#33BDB0"}}/>,
  money: <LocalAtmIcon style={{ color: "#25b545"}}/>,
  creditCard: <CreditCardIcon style={{ color: "#2c70e6"}}/>,
  debitCard: <PaymentsIcon style={{ color: "#fb8c1e"}}/>,
  loan: <AccountBalanceIcon style={{ color: "#d40007"}}/>,
};

export const optionsPayment: Option[] = [
  { label: "Pix", value: PaymentType.PIX, icon: iconMap.pix },
  { label: "Dinheiro", value: PaymentType.MONEY, icon: iconMap.money },
  { label: "Débito", value: PaymentType.DEBIT_CARD, icon: iconMap.debitCard },
  { label: "Crédito", value: PaymentType.CREDIT_CARD, icon: iconMap.creditCard },
  { label: "Financiamento", value: PaymentType.LOAN, icon: iconMap.loan },
];