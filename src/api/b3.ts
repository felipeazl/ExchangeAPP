import { Get } from "./api";

const baseUrl = "https://brapi.dev/api/";
const apiKey = "3b6XtQxsnzRVKcK9JPohzM";

export async function getB3() {
  const response = await Get(baseUrl + "quote/list?token=" + apiKey);
  return response.stocks;
}

export async function getPaginatedB3() {
  const response = await Get(baseUrl + "quote/list?limit=50&token=" + apiKey);
  return response;
}
