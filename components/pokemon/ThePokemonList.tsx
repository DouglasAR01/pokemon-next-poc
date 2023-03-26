import { PokemonWithFav } from "@/types";
import { DataView } from "primereact/dataview";
import PokemonListItem from "./PokemonListItem";
import ThePokemonListLoader from "./ThePokemonListLoading";

interface Props {
  pokemonList: PokemonWithFav[] | number[];
  loading?: boolean;
}
export default function ThePokemonList({ pokemonList, loading }: Props) {
  const itemTemplate = (pokemon: PokemonWithFav) => {
    return <PokemonListItem pokemon={pokemon} />;
  };
  return (
    <DataView
      value={pokemonList}
      itemTemplate={loading ? ThePokemonListLoader : itemTemplate}
      paginator
      rows={10}
    />
  );
}
