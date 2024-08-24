export const formatReais = (value: string) => {
    let numberValue = parseFloat(value.replace(/\D/g, '')) / 100;
    if (isNaN(numberValue)) {
        numberValue = 0;
    }
    return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const fortmatNumberToReais = (value: number) => {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
}