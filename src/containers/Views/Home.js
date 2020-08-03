import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <h1>Hardcore Beatles Fan Trivia</h1>

      <p style={{ width: "55%", margin: "20px auto" }}>
        Here you can choose which test to use <br />i recomend you start with
        the easy test. Once you press start test you will have 7min to finish
        the test you will be graded on your speed and on your answers lets see
        who really knows the beatles.
      </p>
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
