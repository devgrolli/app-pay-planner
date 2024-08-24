import { parseISO, format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DateOptions {
  year: string;
  month: string;
  day: string;
}

interface TimeOptions {
  hour: string;
  minute: string;
}

export const formatDateBR = (date: string | number | Date): string => {
  let parsedDate: Date;

  if (typeof date === 'string') {
    parsedDate = parseISO(date);
  } else {
    parsedDate = new Date(date);
  }

  if (!isValid(parsedDate)) {
    console.error('Invalid date value:', date);
    return 'Invalid date';
  }

  return format(parsedDate, 'dd/MM/yyyy', { locale: ptBR });
};


export const formatDate = (date: string | number | Date) => {
  const options: DateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("pt-BR", options as any);
};

export const formatDateTime = (date: string | number | Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", dateOptions);
  const formattedTime = new Date(date).toLocaleTimeString("pt-BR", timeOptions);
  
  return `${formattedDate} - ${formattedTime}`;
};
