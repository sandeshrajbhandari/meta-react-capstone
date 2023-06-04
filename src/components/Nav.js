import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../components/HomePage";
import BookingPage from "../components/BookingPage";
import MenuPage from "../components/MenuPage";
import OrderOnlinePage from "../components/OrderOnlinePage";
import AboutPage from "../components/AboutPage";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
