import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Defina o tipo para o item favorito
interface FavoriteItem {
  name: string;
  symbol: string;
  imgUrl: string;
  price: string;
  variation: string;
  isFavorite: boolean;
  id: string;
}

// Defina o tipo para o contexto
interface FavoritesContextType {
  favorite: FavoriteItem[];
  setFavorite: Dispatch<SetStateAction<FavoriteItem[]>>;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
FavoritesContext.displayName = "MyFavorites";

type FavoritesProviderProps = {
  children: ReactNode;
};

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorite, setFavorite] = useState<FavoriteItem[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personalizado
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext) || {
    favorite: [],
    setFavorite: () => {},
  };

  function addFavorite(newFavorite: FavoriteItem) {
    /* Verificar se tem item favorito repetido */
    const repeatedFavorite = favorite.some(
      (item) => item.symbol === newFavorite.symbol
    );

    /* Nova lista recebe lista anterior */
    let newList = [...favorite];

    /* Verificar se não tem repetido, então adicione o item na lista de favoritos */
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      setFavorite(newList); // Atualizar a lista
    } else {
      // Se for repetido, ele será removido da lista
      newList = favorite.filter((fav) => fav.symbol !== newFavorite.symbol);
      setFavorite(newList); // Nova lista atualizada
    }
    console.log(addFavorite);
  }

  return {
    favorite,
    addFavorite,
  };
}
