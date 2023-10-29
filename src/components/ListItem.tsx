import { Link } from "react-router-dom";
import IconGraphDownArrow from "../assets/svgs/GraphDown";
import IconGraphUpArrow from "../assets/svgs/GraphUp";
import IconHeart from "../assets/svgs/Heart";
import IconRightArrow from "../assets/svgs/LeftArrow";
import { useState } from "react";
import { useFavoriteContext } from "../contexts/Favorites";

interface Data {
  imgUrl: string;
  symbol: string;
  name: string;
  price: string;
  variation: string;
  id: string;
  isFavorite?: boolean;
  isB3?: boolean;
}

const ListItem = (props: Data) => {
  const [isFavortie, setIsFavorite] = useState(false);
  const { addFavorite } = useFavoriteContext();

  function handleFavorite() {
    addFavorite({
      name: props.name,
      symbol: props.symbol,
      imgUrl: props.imgUrl,
      price: props.price,
      variation: props.variation,
      isFavorite: isFavortie,
      id: props.id,
    });
    setIsFavorite(!isFavortie);
  }

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
        <a onClick={handleFavorite} className="cursor-pointer">
          <IconHeart
            color={isFavortie || props.isFavorite ? "#dc2626" : "#4338ca"}
            width={24}
            height={24}
          />
        </a>
      </div>
      {props.isB3 ?? (
        <div className="px-16">
          <Link
            className="w-full flex flex-col justify-center items-center "
            to={
              props.isB3 ? `/detailsb3/${props.name}` : `/details/${props.id}`
            }
          >
            <IconRightArrow color="#4338ca" width={24} height={24} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListItem;
