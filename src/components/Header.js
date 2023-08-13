import Nav from "./Nav";
// import { ReactComponent as Logo } from "./Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "/assets/Logo.svg"} alt="test" />
      <Nav />
    </div>
  );
};

export default Header;
