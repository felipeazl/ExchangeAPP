import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getCoinDetails, getCoins } from "../api/crypto";
import { CryptoModel } from "../models/CryptoModel";

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [coinPriceHistory, setCoinPriceHistory] = useState<[]>([]);
  const [cryptoData, setCryptoData] = useState<CryptoModel[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  async function fetchCoinHistory() {
    try {
      if (!loadingData) {
        const response = await getCoinDetails(id);
        const crypto = await getCoins();
        if (response.data.base === crypto.data.symbol) {
          setCryptoData(crypto.data);
        }
        setCoinPriceHistory(response.data);
        setLoadingData(true);
        console.log(response.data);
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
      <h2>Detalhes do ID: {id}</h2>
      {cryptoData.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default CoinDetails;
