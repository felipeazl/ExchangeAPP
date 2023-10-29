import { Get } from "./api";

//define constantes basicas de todas as requisições para a B3
const baseUrl = "https://brapi.dev/api/";
const apiKey = "3b6XtQxsnzRVKcK9JPohzM";

//pega todos os ativos
export async function getB3() {
  const response = await Get(baseUrl + "quote/list?token=" + apiKey);
  return response.stocks;
}

//pega os ativos de forma limitada
export async function getPaginatedB3() {
  const response = await Get(baseUrl + "quote/list?limit=50&token=" + apiKey);
  return response;
}
