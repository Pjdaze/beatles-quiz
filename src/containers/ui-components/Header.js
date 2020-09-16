import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ padding: "20px", boxShadow: "0px 0px 5px #666" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/EasyTest">Easy Test</NavLink>
        <NavLink to="/HardTest">Hard Test</NavLink>
        <NavLink to="/ContactForm">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
