import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
