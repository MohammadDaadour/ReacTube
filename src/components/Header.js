import "./comp.css";
import { youtubeLogo } from "./Logos";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Header = (props) => {
  return (
    <header>
      <Link to="/">
        <div className="slogan">
          <img alt="" src = {youtubeLogo} className = "youtubeLogo" />
          <h4>ReacTube</h4>
        </div>
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
