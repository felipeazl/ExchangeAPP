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
            <div className="w-full h-full bg-zinc-200 shadow-xl p-20 rounded-xl">
              <div className="flex items-center">
                <img src={item.image_url} />
                <div className="pl-20 flex w-full justify-between">
                  <div className="flex flex-col">
                    <p className="font-medium text-5xl">{item.name}</p>
                    <p className="font-bold text-2xl">{item.symbol}</p>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex gap-2">
                      <p className="font-normal text-3xl">Preço:</p>
                      <p className="font-medium text-3xl">
                        {formatBRL(item.latest)}
                      </p>
                    </div>
                    <div
                      className={`text-2xl flex flex-row gap-2 justify-center items-center ${
                        item.percent_change > 0
                          ? "text-green-600"
                          : "text-red-600"
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
                </div>
              </div>
              <table className="mt-20 w-full bg-white rounded-lg shadow-lg">
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2 text-center">Total</th>
                  <th className="p-2 text-center">Hora</th>
                  <th className="p-2 text-center">Dia</th>
                  <th className="p-2 text-center">Semana</th>
                  <th className="p-2 text-center">Mês</th>
                  <th className="p-2 text-center">Ano</th>
                </tr>
                <tr>
                  <td className="p-2 text-left text-lg">Variação</td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.all)}
                  </td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.hour)}
                  </td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.day)}
                  </td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.week)}
                  </td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.month)}
                  </td>
                  <td className="p-2 text-center text-lg font-medium">
                    {formatVariation(item.latest_price.percent_change.year)}
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
