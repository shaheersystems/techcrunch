import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import SingleNews from "./pages/SingleNews";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<SingleNews />} />
        </Routes>
      </div>
      <div className="sticky top-0 w-56"></div>
    </div>
  );
}

export default App;
