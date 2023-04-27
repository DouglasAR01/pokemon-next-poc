import { useEffect, useState } from "react";
import AuthGuard from "../components/hoc/AuthGuard";
import ThePokemonList from "@/components/pokemon/ThePokemonList";
import { Pokemon, PokemonWithFav } from "@/types";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
export default function Favorites() {
  const [pokemons, setPokemons] = useState<PokemonWithFav[] | number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = useSupabaseClient();
  const user = useUser();

  const getPokemonWithFavs = async (): Promise<PokemonWithFav[]> => {
    if (!user) return [];
    const { data } = await supabase
      .from("user_favorites")
      .select("pokemons(*)")
      .eq("user_id", user.id)
      .returns<
        {
          pokemons: Pokemon;
        }[]
      >();
    if (!data) return [];
    let favs: PokemonWithFav[] = [];
    data.forEach((res) => {
      const pokemon: PokemonWithFav = {
        ...res.pokemons,
        favorite: true,
      };
      favs.push(pokemon);
    });
    return favs;
  };

  useEffect(() => {
    if (loading) setPokemons([1, 2, 3]);
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
        <h1 className="text-center">Your favorites</h1>
        <ThePokemonList pokemonList={pokemons} loading={loading} />
      </article>
    </AuthGuard>
  );
}
