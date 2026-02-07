import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edusite.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Edusite" className="logo" />

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? "✕" : "☰"}
      </button>

      <ul className={open ? "open" : ""}>
        <li>
          <Link to="hero" smooth offset={0} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth offset={-120} duration={500} onClick={closeMenu}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth offset={-100} duration={500} onClick={closeMenu}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth offset={-120} duration={500} onClick={closeMenu}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth offset={-120} duration={500} onClick={closeMenu}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth offset={-120} duration={500} className="btn" onClick={closeMenu}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
