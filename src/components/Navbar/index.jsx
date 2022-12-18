import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { RiFileHistoryLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./index.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [ActiveN, setActiveN] = useState("1");

  return (
    <div className="nav_container">
      <ul className="nav_items">
        <Link spy={true} to="hero" smooth={true}>
          <li
            id="1"
            onClick={() => setActiveN("1")}
            className={ActiveN === "1" ? "active" : ""}
          >
            <AiOutlineHome />
          </li>
        </Link>
        <Link spy={true} to="gallery" smooth={true}>
          <li
            id="2"
            onClick={() => setActiveN("2")}
            className={ActiveN === "2" ? "active" : ""}
          >
            <RiGalleryLine />
          </li>
        </Link>
        <Link spy={true} to="equipments" smooth={true}>
          <li
            id="3"
            onClick={() => setActiveN("3")}
            className={ActiveN === "3" ? "active" : ""}
          >
            <VscTools />
          </li>
        </Link>
        <Link spy={true} to="history" smooth={true}>
          <li
            id="4"
            onClick={() => setActiveN("4")}
            className={ActiveN === "4" ? "active" : ""}
          >
            <RiFileHistoryLine />
          </li>
        </Link>
        <Link spy={true} to="footer" smooth={true}>
          <li
            id="5"
            onClick={() => setActiveN("5")}
            className={ActiveN === "5" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
