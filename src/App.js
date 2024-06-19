import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/common/navbar";
import Inner from "./pages/inner";
function App() {
  return (
    <div className=" max-w-[1920px] container bg-black   min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Inner />} />
      </Routes>
    </div>
  );
}

export default App;
