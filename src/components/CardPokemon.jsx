import React, { memo } from "react";
import { Link } from "react-router-dom";
import GlassContainer from "./ui/GlassContainer";
import PrimaryButton from "./ui/PrimaryButton";

function CardPokemon({ pokemon }) {
  const sprite =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.other.dream_world.front_default;

  return (
    <GlassContainer
      elevation="standard"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
    >
      <img
        src={sprite}
        alt={`Pokemon ${pokemon.name}`}
        style={{
          width: 120,
          height: 120,
          objectFit: "contain",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
          marginBottom: 12,
        }}
      />

      <GlassContainer.Body style={{ width: "100%" }}>
        <span className="pokemon-number">N° {String(pokemon.id).padStart(3, '0')}</span>
        <p className="pokemon-name">{pokemon.name}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={`type-badge ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </GlassContainer.Body>

      <GlassContainer.Footer style={{ width: "100%", paddingBottom: 0 }}>
        <Link to={`/pokemon/${pokemon.id}`} style={{ width: "100%", display: "block" }}>
          <PrimaryButton variant="ghost" style={{ width: "100%" }}>
            Ver detalles →
          </PrimaryButton>
        </Link>
      </GlassContainer.Footer>
    </GlassContainer>
  );
}

export default memo(CardPokemon);
