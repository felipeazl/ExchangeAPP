import { Get } from "./api";

//pega todas as cryptos
export async function getCoins() {
  const response = await Get(
    "https://api.coinbase.com/v2/assets/search?base=BRL"
  );
  return response;
}

//pega somente a crypto especifica
export async function getCoinDetails(id?: string) {
  const response = await Get(
    `https://api.coinbase.com/v2/assets/prices/${id}?base=BRL`
  );
  return response;
}
