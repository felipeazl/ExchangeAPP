//Recebe o valor em string, passa para Number e formata ele com duas casas decimais
//Retorna uma string novamente.
export const formatBRL = (value: string) => {
  const valueToFormat = parseFloat(value);
  const formattedValue = `BRL ${valueToFormat.toFixed(2)}`;
  return formattedValue;
};

//Recebe um number e formata para uma string com duas casas decimais
export const formatB3 = (value: number) => {
  const formattedValue = `R$ ${value.toFixed(2)}`;
  return formattedValue;
};

//Recebe um number e formata a variação para ter 6 caasas decimais e ser mais precisa
export const formatVariation = (variation: number) => {
  const formattedVariation = `${Number(variation).toFixed(6)}`;
  return formattedVariation;
};
