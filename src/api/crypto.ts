import { Get } from "./api";

export async function getCoins() {
  const response = await Get(
    "https://api.coinbase.com/v2/assets/search?base=BRL"
  );
  return response;
}

export async function getCoinDetails(id?: string) {
  const response = await Get(
    `http://api.coinbase.com/v2/assets/prices/${id}?base=BRL`
  );
  return response;
}
