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
      <img className="w-[40%]" src={props.imgUrl} />
      <div className="flex flex-col mt-[20px]">
        <p className="text-2xl font-semibold">{props.name}</p>
        <p className="text-lg font-bold">{props.symbol}</p>
      </div>
      <div className="flex flex-col items-end mt-[30px]">
        <p className="text-xl font-medium">{props.price}</p>
        <p>{props.variation}</p>
      </div>
    </div>
  );
}
