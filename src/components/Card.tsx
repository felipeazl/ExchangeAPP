interface Data {
  imgUrl: string;
  name: string;
  symbol: string;
  price: string;
  variation: string;
}

export default function Card(props: Data) {
  function checkVariation() {
    const variation = parseFloat(props.variation);
    if (variation > 0) {
      return true;
    } else {
      return false;
    }
  }

  const variation = checkVariation();

  return (
    <div className="flex flex-col border-2 shadow-xl border-indigo-600 rounded-lg p-4 w-80 h-80">
      <div className=" flex flex-row items-center">
        <img className="w-[25%] rounded-[50%]" src={props.imgUrl} />
        <div className="ml-4">
          <p className="text-2xl font-semibold">{props.name}</p>
          <p className="text-lg font-bold">{props.symbol}</p>
        </div>
      </div>
      <div className="flex justify-between mt-[120px]">
        <p>Preço: </p>
        <p className="text-xl font-medium">{props.price}</p>
      </div>
      <div className="flex justify-between">
        <p>Variação: </p>
        <div
          className={`text-xl font-medium ${
            variation ? "text-green-600" : "text-red-600"
          }`}
        >
          {variation ? "+" + props.variation : props.variation}
        </div>
      </div>
      <div className="relative">
        <a className="absolute bottom-[-50px] right-[-5px]">Explorar</a>
      </div>
    </div>
  );
}
