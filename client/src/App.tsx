import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="orders" />
          <Route path="menu" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
