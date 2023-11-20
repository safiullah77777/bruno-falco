import Home from "./pages/Home";
import PreLaunching from "./pages/PreLaunching";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-launching" element={<PreLaunching />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
