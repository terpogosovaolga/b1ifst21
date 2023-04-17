import "./App.css";
import "./style/style.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  console.log("rerender app");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<h1>Корзина</h1>} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
