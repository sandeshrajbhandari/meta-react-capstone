// import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ReservationsPage from "./components/ReservationsPage";
import MenuPage from "./components/MenuPage";
import OrderOnlinePage from "./components/OrderOnlinePage";
import AboutPage from "./components/AboutPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
      </Routes>
    </>
  );
}

export default App;
