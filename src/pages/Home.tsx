/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import * as api from "../api/api";
import Card from "../components/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { CryptoModel } from "../models/CryptoModel";
import { formatBRL, formatVariation } from "../helpers/formatHelper";

export default function Home() {
  const homeCryptos = ["BTC", "ETH", "BNB", "USDC", "SOL"];
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
      <div className="flex flex-col pt-10 ">
        <div className="flex items-center px-10">
          <h1 className="flex-1 text-2xl font-semibold">
            As melhores Cryptos!
          </h1>
          <Link to="/crypto" className="flex-2 ml-12 text-xl text-indigo-600">
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
      {/* <div className="flex flex-col pt-10 ">
        <div className="flex items-center px-10">
          <h1 className="flex-1 text-2xl font-semibold">
            As melhores Cryptos!
          </h1>
          <Link to="/crypto" className="flex-2 ml-12 text-xl text-indigo-600">
            Ver todas
          </Link>
        </div>
        <div className="px-10 pt-10 flex flex-row gap-4 w-[100vw] overflow-auto whitespace-nowrap">
          {cryptoData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              symbol={item.symbol}
              imgUrl={item.image_url}
              price={item.latest}
              variation={item.percent_change}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
