import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../components/CardPokemon";

function SearchPage() {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div>
      <p>
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>

      <div>
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
