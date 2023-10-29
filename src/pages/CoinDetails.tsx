/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getCoinDetails, getCoins } from "../api/crypto";
import { CryptoModel } from "../models/CryptoModel";
import { CryptoPriceModel } from "../models/CriptoPriceModel";
import Loader from "../components/Loader";
import { formatBRL, formatVariation } from "../helpers/formatHelper";
import IconGraphUpArrow from "../assets/svgs/GraphUp";
import IconGraphDownArrow from "../assets/svgs/GraphDown";

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [coinPriceHistory, setCoinPriceHistory] = useState<CryptoPriceModel[]>(
    []
  );
  const [cryptoData, setCryptoData] = useState<CryptoModel[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  async function fetchCoinHistory() {
    try {
      if (!loadingData) {
        const response = await getCoinDetails(id);
        const crypto = await getCoins();
        const selectedCrypto = crypto.data.filter(
          (item: { symbol: string }) => item.symbol === response.data.base
        );
        setCryptoData(selectedCrypto);
        setCoinPriceHistory(response.data.prices);
        console.log(coinPriceHistory);
        setLoadingData(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }
  }

  useEffect(() => {
    fetchCoinHistory();
  }, []);

  console.log(cryptoData);

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="w-full h-full flex mt-[10%] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center p-10">
          {cryptoData.map((item) => (
            <div className="w-full h-full bg-zinc-200 shadow-xl p-8 rounded-xl">
              <div className="flex items-center">
                <img src={item.image_url} />
                <div className="pl-10">
                  <p className="font-medium text-3xl">{item.name}</p>
                  <p className="font-bold text-lg">{item.symbol}</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <div className="flex gap-2">
                  <p className="font-normal text-2xl">Preço:</p>
                  <p className="font-medium text-2xl">
                    {formatBRL(item.latest)}
                  </p>
                </div>
                <div
                  className={`text-4xl flex flex-row gap-2 justify-center items-center ${
                    item.percent_change > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatVariation(item.percent_change)}
                  {item.percent_change > 0 ? (
                    <IconGraphUpArrow />
                  ) : (
                    <IconGraphDownArrow />
                  )}
                </div>
              </div>
              <div className="mt-8">
                <h1 className="text-2xl font-medium">Variações:</h1>
                <div className="mt-4 flex flex-col justify-center items-center">
                  <div className="flex gap-20">
                    <p className="text-lg">Total:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.all)}
                    </p>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-lg">Hora:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.hour)}
                    </p>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-lg">Dia:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.day)}
                    </p>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-lg">Semana:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.week)}
                    </p>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-lg">Mês:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.month)}
                    </p>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-lg">Ano:</p>
                    <p className="text-lg font-medium">
                      {formatVariation(item.latest_price.percent_change.year)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
