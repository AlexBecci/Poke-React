import React, { memo, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";
import Loader from "./Loader";

function PokemonList() {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
  const list = filteredPokemons.length ? filteredPokemons : allPokemons;

  return loading ? (
    <Loader />
  ) : (
    <div className="pokemon-grid container">
      {list.map((pokemon) => (
        <CardPokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

export default memo(PokemonList);
