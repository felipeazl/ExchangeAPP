interface Data {
  imgUrl: string;
  name: string;
  symbol: string;
  price: string;
  variation: string;
}

export default function Card(props: Data) {
  return (
    <div className="flex flex-col border-2 shadow-lg border-indigo-600 rounded-lg p-8 w-80 h-80">
      <div className=" flex flex-row items-center">
        <img className="w-[25%] rounded-[50%]" src={props.imgUrl} />
        <div className="ml-4">
          <p className="text-2xl font-semibold">{props.name}</p>
          <p className="text-lg font-bold">{props.symbol}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Preço: </p>
        <p className="text-xl font-medium">{props.price}</p>
      </div>
      <div className="flex justify-between">
        <p>Variação: </p>
        <p className="text-xl font-medium">{props.price}</p>
      </div>
      <div className="relative">
        <a className="absolute bottom-[-150px] right-[-5px]">Explorar</a>
      </div>
    </div>
  );
}
