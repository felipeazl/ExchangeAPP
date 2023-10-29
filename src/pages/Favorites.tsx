import Header from "../components/Header";
import { formatBRL, formatVariation } from "../helpers/formatHelper";
import { useFavoriteContext } from "../contexts/Favorites";
import ListItem from "../components/ListItem";

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center mt-10">
        {favorite.map((item, index) => (
          <ListItem
            key={index}
            id={item.id}
            name={item.name}
            isFavorite={item.isFavorite}
            symbol={item.symbol}
            imgUrl={item.imgUrl}
            price={formatBRL(item.price)}
            variation={formatVariation(parseFloat(item.variation))}
          />
        ))}
      </div>
    </div>
  );
}
