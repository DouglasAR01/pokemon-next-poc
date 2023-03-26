import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Button } from "primereact/button";
import { useMemo, useState } from "react";

interface NewPokemonFav {
  user_id: string;
  pokemon_id: number;
}

interface Props {
  pokemonId: number,
  isFav?: boolean
}

export default function PokemonFavButton({pokemonId, isFav}: Props) {
  const [isFavorite, setFavorite] = useState<boolean>(!!isFav);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = useSupabaseClient();
  const user = useUser();
  const buttonIcon = useMemo<string>(() => {
    return isFavorite ? "pi pi-heart-fill" : "pi pi-heart";
  }, [isFavorite])

  const favorite = async () => {
    if (!user) return;
    const newFav: NewPokemonFav = {
      user_id: user.id,
      pokemon_id: pokemonId,
    };
    const { error } = await supabase
      .from("user_favorites")
      .insert<NewPokemonFav>(newFav);
    if (!error) setFavorite(true);
  };

  const unFavorite = async () => {
    if (!user) return;
    const { error } = await supabase
      .from("user_favorites")
      .delete()
      .eq("user_id", user.id)
      .eq("pokemon_id", pokemonId);
    if (!error) setFavorite(false);
  };

  const handleClick = async () => {
    setLoading(true);
    if (isFavorite) {
      await unFavorite();
    } else {
      await favorite();
    }
    setLoading(false);
  };

  return (
    <Button
      text
      rounded
      icon={buttonIcon}
      className="text-pink-400"
      loading={loading}
      onClick={handleClick}
    />
  );
}
