import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "semantic-ui-react";

const Header = () => {
  return (
    <div style={{ padding: "20px", border: "5px solid #222" }}>
      <nav
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/HardTest">Hard Test</NavLink>
        <NavLink to="/EasyTest">Easy Test</NavLink>
      </nav>
    </div>
  );
};

export default Header;
