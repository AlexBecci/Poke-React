import React, { memo, useCallback, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import PrimaryButton from "./ui/PrimaryButton";

function Navigation() {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate("/search", { state: valueSearch });
      onResetForm();
    },
    [valueSearch, navigate, onResetForm]
  );

  return (
    <>
      <header className="glass-nav">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
          }}
        >
          <Link to="/" style={{ lineHeight: 0 }}>
            <img
              src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
              alt="Logo Pokédex"
            />
          </Link>

          <form
            onSubmit={onSearchSubmit}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgba(255,255,255,0.45)"
                style={{
                  width: 18,
                  height: 18,
                  position: "absolute",
                  left: 14,
                  pointerEvents: "none",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="glass-input"
                type="search"
                name="valueSearch"
                value={valueSearch}
                onChange={onInputChange}
                placeholder="Buscar Pokémon..."
                style={{ paddingLeft: 42, width: 280 }}
              />
            </div>

            <PrimaryButton type="submit">Buscar</PrimaryButton>
          </form>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default memo(Navigation);
