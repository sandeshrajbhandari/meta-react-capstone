import Nav from "./Nav";
// import { ReactComponent as Logo } from "./Logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/assets/Logo.svg"} alt="test" />
      </Link>

      <Nav />
    </div>
  );
};

export default Header;
