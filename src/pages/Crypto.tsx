import { useEffect, useState } from "react";
import Header from "../components/Header";
import { CryptoModel } from "../models/CryptoModel";
import * as api from "../api/api";
import ListItem from "../components/ListItem";
import { formatBRL, formatVariation } from "../helpers/formatHelper";

export default function Crypto() {
  const [cryptoData, setCryptoData] = useState<CryptoModel[]>([]);

  async function fetchCryptos() {
    try {
      const response = await api.Get(
        "https://api.coinbase.com/v2/assets/search?base=BRL"
      );
      setCryptoData(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }
  }

  useEffect(() => {
    fetchCryptos();
    const intervalId = setInterval(fetchCryptos, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-10">
        {cryptoData.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            symbol={item.symbol}
            imgUrl={item.image_url}
            price={formatBRL(item.latest)}
            variation={formatVariation(item.percent_change)}
          />
        ))}
      </div>
    </div>
  );
}
