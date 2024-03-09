import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui/components";
import MarvelPages from "../../heroes/pages/MarvelPages";
import DcPages from "../../heroes/pages/DcPages";
import SearchPages from "../pages/SearchPages";
import HeroPage from "../pages/HeroPage";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
