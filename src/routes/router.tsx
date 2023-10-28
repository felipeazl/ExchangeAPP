import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Crypto from "../pages/Crypto";
import B3 from "../pages/B3";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CoinDetails from "../pages/CoinDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/investments" element={<B3 />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
