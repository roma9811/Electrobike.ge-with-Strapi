 import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { slide as Menu } from "react-burger-menu";

export const Navbar = ({ scrollToSections }) => {
  const navListRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
    transform: "scale(0.8)",
  });

  const customBackgroundPosition = (e) => {
    if (navListRef.current) {
      const listRect = navListRef.current.getBoundingClientRect();
      const itemRect = e.target.getBoundingClientRect();

      setHoverStyle({
        left: `${itemRect.left - listRect.left}px`,
        top: `${itemRect.top - listRect.top}px`,
        width: `${itemRect.width}px`,
        height: `${itemRect.height}px`,
        opacity: 1,
        transform: "scale(1)",
      });
    }
  };

  const disappearBackground = () => {
    setHoverStyle((prev) => ({
      ...prev,
      opacity: 0,
      transform: "scale(0.5)",
    }));
  };

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (item === "HOME") {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (["CONTACT", "ABOUT", "CUSTOMERS"].includes(item)) {
      if (!isHomePage) {
        navigate("/");
        setTimeout(() => {
          scrollToSections[item]?.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        scrollToSections[item]?.current?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item === "HOME" ? "/" : `/${item.toLowerCase()}`);
    }
  };

  const menuItems = ["HOME", "CATALOG", "CUSTOMERS", "ABOUT"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navContainer">
      <div className="NavBox">
        <div className="Logo" onClick={() => handleNavClick("HOME")}>
          <img src={Logo} alt="logo" />
        </div>
        <div className="BurgerMenu mobileOnly">
          <Menu
            right
            width="100%"
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
            styles={{
              bmMenu: {
                boxShadow: "10px 30px 120px rgba(0, 0, 0, 0.3)",
                zIndex: 1000,
              },
            }}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavClick(item)}
                className="menu-item burger-menu-item"
              >
                {item}
              </div>
            ))}
            <Button
              variant="contained"
              style={{ margin: "10px 20px", fontSize: "18px", color: "#fff", backgroundColor: "#72913E" }}
              onClick={() => handleNavClick("CONTACT")}
            >
              CONTACT
            </Button>
          </Menu>
        </div>
        <div className="NavList desktopOnly" ref={navListRef} onMouseLeave={disappearBackground} style={{ position: "relative" }}>
          <ul>
            <div className="customBackground" style={{
              position: "absolute",
              left: hoverStyle.left,
              top: hoverStyle.top,
              width: hoverStyle.width,
              height: hoverStyle.height,
              backgroundColor: "rgb(187 185 185 / 10%)",
              borderRadius: "6px",
              opacity: hoverStyle.opacity,
              transform: hoverStyle.transform,
              transition: "all 0.3s ease",
              pointerEvents: "none",
              zIndex: 0,
            }}/>
            {menuItems.map((item, index) => (
              <li key={index} onMouseOver={customBackgroundPosition} onClick={() => handleNavClick(item)} style={{ position: "relative", zIndex: 1, cursor: "pointer" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="NavBtn desktopOnly">
          <Button variant="contained" onClick={() => handleNavClick("CONTACT")}>CONTACT</Button>
        </div>
      </div>
    </div>
  );
};
