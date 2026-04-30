import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../components/CardPokemon";
import Loader from "../components/Loader";

function SearchPage() {
  const location = useLocation();
  const { globalPokemons, getPokemonByID } = useContext(PokemonContext);

  const [results, setResults]   = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    const query = location.state?.toLowerCase() ?? "";

    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    // globalPokemons is now [{name, url}] — filter by name, then fetch details
    const matched = globalPokemons.filter((p) => p.name.includes(query));

    if (!matched.length) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    Promise.all(matched.map((p) => getPokemonByID(p.name))).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [location.state, globalPokemons]);

  return (
    <div style={{ padding: "24px" }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p style={{ color: "#dae2fd", marginBottom: 16, fontFamily: "Inter, sans-serif" }}>
            Se encontraron <strong>{results.length}</strong> resultados
          </p>
          <div className="pokemon-grid container">
            {results.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchPage;
