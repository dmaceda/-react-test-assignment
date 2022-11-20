import { Routes, Route, useLocation } from "react-router-dom";
import Access from "./screens/Access";
import Home from "./screens/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
