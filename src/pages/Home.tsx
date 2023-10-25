import Card from "../components/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  const coins = [
    {
      name: "Bitcon",
      sybol: "BTC",
      imgUrl:
        "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
      price: "1000",
      variation: "1,40%",
    },
    {
      name: "Bitcon",
      sybol: "BTC",
      imgUrl:
        "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
      price: "1000",
      variation: "1,40%",
    },
    {
      name: "Bitcon",
      sybol: "BTC",
      imgUrl:
        "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
      price: "1000",
      variation: "1,40%",
    },
    {
      name: "Bitcon",
      sybol: "BTC",
      imgUrl:
        "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
      price: "1000",
      variation: "1,40%",
    },
    {
      name: "Bitcon",
      sybol: "BTC",
      imgUrl:
        "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
      price: "1000",
      variation: "1,40%",
    },
  ];

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
        <div className="px-10 pt-10 flex flex-row gap-40">
          {coins.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              symbol={item.sybol}
              imgUrl={item.imgUrl}
              price={item.price}
              variation={item.variation}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-10 ">
        <div className="flex items-center px-10">
          <h1 className="flex-1 text-2xl font-semibold">
            As melhores Cryptos!
          </h1>
          <Link to="/crypto" className="flex-2 ml-12 text-xl text-indigo-600">
            Ver todas
          </Link>
        </div>
        <div className="px-10 pt-10 flex flex-row gap-40">
          {coins.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              symbol={item.sybol}
              imgUrl={item.imgUrl}
              price={item.price}
              variation={item.variation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
