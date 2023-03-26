import { useEffect, useState } from "react";
import AuthGuard from "../components/hoc/AuthGuard";
import ThePokemonList from "@/components/pokemon/ThePokemonList";
import { Pokemon, PokemonWithFav } from "@/types";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
export default function dashboard() {
  const [pokemons, setPokemons] = useState<PokemonWithFav[] | number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = useSupabaseClient();
  const user = useUser();

  const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    const { data, error } = await supabase
      .from("pokemons")
      .select()
      .order("pokedex_id")
      .returns<Pokemon[]>();
    if (error) return [];
    return data;
  };

  const fetchUserFavs = async (): Promise<number[]> => {
    let favArray: number[] = [];
    const { data, error } = await supabase
      .from("user_favorites")
      .select("pokemon_id")
      .eq("user_id", user?.id);
    if (error) return [];
    data!.forEach((res) => {
      favArray.push(res.pokemon_id);
    });
    return favArray;
  };

  const getPokemonWithFavs = async (): Promise<PokemonWithFav[]> => {
    const allPokemons = await fetchAllPokemons();
    const userFavs = await fetchUserFavs();
    if (allPokemons.length < 1) return [];
    return allPokemons.map((pokemon: Pokemon): PokemonWithFav => {
      const isFav = userFavs.includes(pokemon.id);
      const cPokemon: PokemonWithFav = {
        ... pokemon,
        favorite: isFav
      };
      return cPokemon;
    })
  }
  
  useEffect(() => {
    if (loading) setPokemons([1,2,3]);
  }, [loading]);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      setPokemons(await getPokemonWithFavs());
      setLoading(false);
    }
    fetchPokemons();
  }, []);
  return (
    <AuthGuard>
      <article className="p-container py-2 px-4 my-4 shadow-1 surface-section">
        <h1 className="text-center">Check out the Pokemons!</h1>
        <ThePokemonList pokemonList={pokemons} loading={loading} />
      </article>
    </AuthGuard>
  );
}
