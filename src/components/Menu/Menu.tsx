import "./Menu.css";
import menu from "../../assets/images/icons/icon-hamburger.svg";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu" onClick={() => setOpen((prev) => !prev)}>
      <img src={menu} alt="Menu" />
      <div className={`menu-drop ${open ? "menu-drop-open" : ""}`}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
