import { Route, Routes } from "react-router-dom"
import { Header } from "../components/ui/Header/Header"
import { Home } from "../components/screens/Home/Home"
import { Search } from "../components/screens/Search/Search";
import { DCHeroes } from "../components/screens/DCHeroes/DCHeroes";
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes";
import { HeroPage } from "../components/screens/HeroPage/HeroPage";

export const ProtectedRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dcHeroes" element={<DCHeroes />} />
        <Route path="/marvelHeroes" element={<MarvelHeroes />} />
        <Route path="/hero/:id" element={<HeroPage />} />


    </Routes>
    </>
  );
};
