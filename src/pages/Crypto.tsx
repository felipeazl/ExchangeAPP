import { useEffect, useState } from "react";
import Header from "../components/Header";
import { CryptoModel } from "../models/CryptoModel";
import * as api from "../api/api";
import ListItem from "../components/ListItem";
import { formatBRL, formatVariation } from "../helpers/formatHelper";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Crypto() {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState<CryptoModel[]>([]);

  async function fetchCryptos() {
    try {
      const response = await api.Get(
        "https://api.coinbase.com/v2/assets/search?base=BRL"
      );
      setCryptoData(response.data);
      setIsLoading(false);
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
      {isLoading ? (
        <div className="w-full h-full flex mt-[10%] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          {cryptoData.map((item, index) => (
            <Link
              className="w-full flex flex-col justify-center items-center "
              to={`/details/${item.id}`}
            >
              <ListItem
                key={index}
                name={item.name}
                symbol={item.symbol}
                imgUrl={item.image_url}
                price={formatBRL(item.latest)}
                variation={formatVariation(item.percent_change)}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
