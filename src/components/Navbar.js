import "./comp.css";
import { Link } from "react-router-dom";
import Links from "./Links";
import {
  gamingLogo,
  homeLogo,
  musicLogo,
  eduLogo,
  sportLogo,
  menu,
} from "./Logos";
import { useState } from "react";
import Backdrop from "./Backdrop";

const Navbar = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.matchMedia("(max-width: 662px)").matches) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div className={`actualBar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <img src={menu} alt="" />
        </button>
        <ul onClick={toggleSidebar}>
          <Links
            className="visited"
            setCurrentSection={setCurrentSection}
            direction="tech"
            logo={homeLogo}
            name="Home"
          />
          <Links
            setCurrentSection={setCurrentSection}
            direction="music"
            logo={musicLogo}
            name="Music"
          />
          <Links
            setCurrentSection={setCurrentSection}
            direction="gaming"
            logo={gamingLogo}
            name="Gaming"
          />
          <Links
            setCurrentSection={setCurrentSection}
            direction="sport"
            logo={sportLogo}
            name="Sport"
          />
          <Links
            setCurrentSection={setCurrentSection}
            direction="education"
            logo={eduLogo}
            name="Education"
          />
        </ul>
        <hr />
        <ul>
          <h4>Channels</h4>
          <br />
          <Link to={"/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"}>
            <li>PewDiePie</li>
          </Link>
          <Link to={"/channel/UC8butISFwT-Wl7EV0hUK0BQ"}>
            <li>Free Code Camp</li>
          </Link>
        </ul>
      </div>
      {isOpen && <Backdrop onClick={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
