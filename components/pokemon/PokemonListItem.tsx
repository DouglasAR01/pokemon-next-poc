import { PokemonWithFav } from "@/types";
import { Button } from "primereact/button";
import { useState } from "react";
import PokemonFavButton from "./PokemonFavButton";

interface Props {
  pokemon: PokemonWithFav;
}
export default function PokemonListItem({ pokemon }: Props) {
  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <img
          className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{pokemon.name}</div>
            <p>{pokemon.pokedex}</p>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-hashtag"></i>
                <span className="font-semibold">{pokemon.pokedex_id}</span>
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <PokemonFavButton pokemonId={pokemon.id} isFav={pokemon.favorite}></PokemonFavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
