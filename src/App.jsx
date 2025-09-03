import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import ScrollToTop from './ScrollToTop.jsx'
import AllProperties from "./Pages/AllProperties.jsx";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/all-properties" element={<AllProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
