import React, { memo, useCallback, useContext } from "react";
import FilterBar from "../components/FilterBar";
import PokemonList from "../components/PokemonList";
import PrimaryButton from "../components/ui/PrimaryButton";
import { PokemonContext } from "../context/PokemonContext";

function HomePage() {
  const { onClickLoadMore, setActive } = useContext(PokemonContext);

  const toggleFilter = useCallback(() => setActive((prev) => !prev), [setActive]);

  return (
    <>
      <div className="container" style={{ padding: "24px 24px 8px", display: "flex" }}>
        <PrimaryButton variant="ghost" onClick={toggleFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ width: 18, height: 18 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          Filtrar
        </PrimaryButton>
      </div>

      <PokemonList />
      <FilterBar />

      <div className="load-more-area">
        <PrimaryButton onClick={onClickLoadMore}>Cargar más</PrimaryButton>
      </div>
    </>
  );
}

export default memo(HomePage);
