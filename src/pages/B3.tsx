import { useEffect, useState } from "react";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { formatB3, formatVariation } from "../helpers/formatHelper";
import Loader from "../components/Loader";
import { getPaginatedB3 } from "../api/b3";
import { B3Model } from "../models/B3Model";

export default function B3() {
  const [isLoading, setIsLoading] = useState(true);
  const [b3Data, setB3Data] = useState<B3Model[]>([]);

  async function fetchB3() {
    try {
      const response = await getPaginatedB3();
      setB3Data(response.stocks);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }
  }

  useEffect(() => {
    fetchB3();
    const intervalId = setInterval(fetchB3, 60000);
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
          {b3Data.map((item, index) => (
            <ListItem
              isB3={true}
              id={item.name}
              key={index}
              name={item.stock}
              symbol={item.name}
              imgUrl={item.logo}
              price={formatB3(item.close)}
              variation={formatVariation(item.change)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
