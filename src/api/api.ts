import axios from "axios";

// Cria uma função de get a partir do axios para poder realizar as requisições da api
function Get(url: string) {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export { Get };
