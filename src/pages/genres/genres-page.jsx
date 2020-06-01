import React from "react";

import "./genres-page.css";

import { Box } from "../../components/Box/Box";

const GenresPage = () => {
  return (
    <div className="genres-page">
      <h1>Жанрове</h1>
      <div className="boxes">
        <Box text="Пътеписи" />
        <Box text="Българска литература" />
        <Box text="Художествена литература" />
        <Box text="Поезия" />
        <Box text="Проза" />
        <Box text="Исторически" />
        <Box text="Фантастика" />
        <Box text="Психология" />
        <Box text="Културология" />
        <Box text="Изотерика" />
      </div>
    </div>
  );
};

export default GenresPage;
