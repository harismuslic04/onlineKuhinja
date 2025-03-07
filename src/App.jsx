import { useState, useEffect } from "react";
import Home from "./components/Home/Home.jsx";
import { ContextProvider } from "./components/AppContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./components/Order/Order.jsx";
import Bucket from "./components/Bucket/Bucket.jsx";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Prebacuje na vrh stranice svaki put kad se promeni ruta
  }, [pathname]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* OVO JE BITNO */}
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/bucket" element={<Bucket />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
