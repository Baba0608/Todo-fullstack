import { useUserContext } from "../contexts/userContext";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  const { userName } = useUserContext();

  return (
    <div className="flex justify-between items-center px-40 py-5 bg-blue-500 shadow-lg shadow-gray-400">
      <div className="text-lg">LOGO</div>
      <div className="flex">
        <Link to="/home">
          <NavItem item="Home" />
        </Link>
        <Link to="/about">
          <NavItem item="About Us" />
        </Link>
        <Link to="/contact">
          <NavItem item="Contact Us" />
        </Link>
        <Link to="/login">
          <NavItem item={userName ? userName : "Login"} />
        </Link>

        <NavItem item="🌙" />
      </div>
    </div>
  );
};

export default Header;
