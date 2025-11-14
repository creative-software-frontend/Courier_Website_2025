import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={"main_header"}>
      <div className={"navbar_brand"}>
        <Link to="/">
          <img
            src="/logo.png"
            alt=""
            style={{ width: "280px", objectFit: "cover" }}
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
