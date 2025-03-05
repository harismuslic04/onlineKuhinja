import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import { ContextProvider } from "./components/AppContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
