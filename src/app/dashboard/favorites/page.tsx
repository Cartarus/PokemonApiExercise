
import { PokemonGrid } from "@/pokemons";
import { FavouritePokemons } from "@/pokemons/components/FavouritePokemons";
import { IoHeartOutline } from 'react-icons/io5';


export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};

export default async function PokemonsPage() {

    return (
      <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">Global State</small></span>
        <FavouritePokemons/>
      </div>
    );
  }

