import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
