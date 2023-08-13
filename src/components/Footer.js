import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={process.env.PUBLIC_URL + "/assets/restauranfood.jpg"}
        alt="footer image"
      />
      <div className="footer-links">
        <h3>Doormat Navigation</h3>
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
      </div>

      <div className="footer-links">
        <h3>Media Links</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
