import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/common/navbar";
import Inner from "./pages/inner";
import Blog from "./pages/blog";
function App() {
  return (
    <div className=" max-w-[1920px] container bg-black   min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Inner />} />
        <Route path="/activity" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
