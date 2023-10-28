import IconGraphDownArrow from "../assets/svgs/GraphDown";
import IconGraphUpArrow from "../assets/svgs/GraphUp";
import IconRightArrow from "../assets/svgs/LeftArrow";

interface Data {
  imgUrl: string;
  symbol: string;
  name: string;
  price: string;
  variation: string;
}

const ListItem = (props: Data) => {
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
    <div className="flex shadow-xl my-2 bg-zinc-100 border border-indigo-600 rounded-lg w-[80%] p-4 justify-center items-center">
      <div>
        <img className="w-[80px] rounded-[50%]" src={props.imgUrl} />
      </div>
      <div className="flex-1 ml-8">
        <p className="text-2xl font-medium">{props.name}</p>
        <p className="text-lg">{props.symbol}</p>
      </div>
      <div className="px-16 flex flex-col items-end">
        <div className="text-xl font-medium">{props.price}</div>
        <div
          className={`text-lg flex flex-row gap-2 justify-center items-center ${
            variation ? "text-green-600" : "text-red-600"
          }`}
        >
          {props.variation}
          {variation ? <IconGraphUpArrow /> : <IconGraphDownArrow />}
        </div>
      </div>
      <div className="px-16">
        <IconRightArrow color="#4338ca" width={24} height={24} />
      </div>
    </div>
  );
};

export default ListItem;
