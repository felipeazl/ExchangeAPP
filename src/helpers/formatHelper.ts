export const formatBRL = (value: string) => {
  const valueToFormat = parseFloat(value);
  const formattedValue = `BRL ${valueToFormat.toFixed(2)}`;
  return formattedValue;
};

export const formatVariation = (variation: number) => {
  const formattedVariation = `${Number(variation).toFixed(6)}`;
  return formattedVariation;
};
