import Access from "./screens/Access";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </div>
  );
}

export default App;
