import { useState, useEffect } from "react";
import * as api from "../api/api";
import Card from "../components/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { CryptoModel } from "../models/CryptoModel";
import { formatB3, formatBRL, formatVariation } from "../helpers/formatHelper";
import Loader from "../components/Loader";
import { getB3 } from "../api/b3";
import { B3Model } from "../models/B3Model";

export default function Home() {
  const homeCryptos = ["BTC", "ETH", "BNB", "USDC", "SOL"];
  const homeB3 = ["B3SA3", "PETR4", "BBAS3", "MGLU3", "MELI34"];
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState<CryptoModel[]>([]);
  const [b3Data, setB3Data] = useState<B3Model[]>([]);

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

  async function fetchB3() {
    try {
      const response = await getB3();
      setB3Data(response);
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCryptos();
        await fetchB3();
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
        setIsLoading(false);
      }
    };

    fetchData();

    const intervalCrypto = setInterval(fetchCryptos, 60000);
    const intervalB3 = setInterval(fetchB3, 60000);

    return () => {
      clearInterval(intervalCrypto);
      clearInterval(intervalB3);
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
        <div>
          <div className="flex flex-col pt-10 ">
            <div className="flex items-center px-10">
              <h1 className="flex-1 text-2xl font-semibold">
                As melhores Cryptos!
              </h1>
              <Link
                to="/crypto"
                className="flex-2 ml-12 text-xl text-indigo-600"
              >
                Ver todas
              </Link>
            </div>
            <div className="px-10 pt-10 flex flex-row gap-4 w-[100vw] overflow-auto whitespace-nowrap">
              {cryptoData
                .filter((item) => homeCryptos.includes(item.symbol))
                .map((item, index) => (
                  <Card
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
          <div className="flex flex-col pt-10 pb-40 ">
            <div className="flex items-center px-10">
              <h1 className="flex-1 text-2xl font-semibold">
                As melhores Ações do Brasil!
              </h1>
              <Link
                to="/investments"
                className="flex-2 ml-12 text-xl text-indigo-600"
              >
                Ver todas
              </Link>
            </div>
            <div className="px-10 pt-10 flex flex-row gap-4 w-[100vw] overflow-auto whitespace-nowrap">
              {b3Data
                .filter((item) => homeB3.includes(item.stock))
                .map((item, index) => (
                  <Card
                    key={index}
                    name={item.stock}
                    symbol={item.name}
                    imgUrl={item.logo}
                    price={formatB3(item.close)}
                    variation={formatVariation(item.change)}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
