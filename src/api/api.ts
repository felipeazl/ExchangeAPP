import axios from "axios";

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
