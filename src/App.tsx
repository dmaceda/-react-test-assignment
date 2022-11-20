import { Routes, Route } from "react-router-dom";
import Access from "./screens/Access";
import Home from "./screens/Home";

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
