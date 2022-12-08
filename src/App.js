import "./App.css";
import LandingPage from "./pages/landingPage";
import { Routes, Route } from "react-router-dom";
import Woman from "./pages/woman";
import Man from "./pages/man";
import Sale from "./pages/sale";
import Furniture from "./pages/furniture";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="clothes" element={<Woman />} />
        <Route path="shoes" element={<Man />} />
        <Route path="sale" element={<Sale />} />
        <Route path="furniture" element={<Furniture />} />
      </Routes>
    </div>
  );
}

export default App;
