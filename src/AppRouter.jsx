import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import PokemonPage from "./pages/PokemonPage"
import SearchPage from "./pages/SearchPage"
import HomePage from "./pages/HomePage"


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
