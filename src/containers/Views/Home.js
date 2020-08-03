import React from "react";
import { Link } from "react-router-dom";
import { Button, List } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <h1>Hardcore Beatles Fan Trivia</h1>
      <h2>Instrutions</h2>
      <div className="flex">
        <ul
          style={{
            textAlign: "left",
            fontSize: "20px",
            lineHeight: "1.5em",
            textAlign: "center",
            margin: "0 auto !important",
          }}
        >
          {" "}
          <li>1. Choose Test To Start</li>
          <li>2. Click Start To Start Your Test</li>
          <li>3. You Have 7 Minutes To Complete the test</li>
          <li style={{ padding: "20px 0px" }}>
            *** Leaving Browser Window After Starting Test Will Result In
            Immediate Disqualification
          </li>
        </ul>
      </div>

      <div className="flex" style={{ width: "400px", margin: "45px auto" }}>
        <Button>
          {" "}
          <Link to="/HardTest">HardTest</Link>
        </Button>
        <Button>
          <Link to="/EasyTest">EasyTest</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
