import React, { useState, useEffect } from "react";

import FormWrap from "../styled-components/FormWrap";
import { FormField, Radio } from "semantic-ui-react";

const EasyTest = () => {
  const [testData, setTestData] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    const url =
      "https://opentdb.com/api.php?amount=10&category=26&type=multiple";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTestData(data.results);
        //console.log(data.results[0].question);
      });
  }, []);

  const handleChange = (e, { option }) => {
    setOption(option);
    console.log(option);
  };
  console.log("TEST DATA HERE", testData);
  return (
    <FormWrap>
      <div>
        {testData.length &&
          testData.map((x, i) => (
            <div>
              <h5>Question Number {i + 1} </h5>
              <h4>{String(x.question)}</h4>

              {/**       <ul>
                {" "}
                {x.incorrect_answers.map((item, index) => (
                  <li>{`${index + 1}: ${item} `}</li>
                ))}
                <li>{` ${i + 1}: ${x.correct_answer}`}</li>
              </ul> */}

              {x.incorrect_answers.map((item, index) => (
                <Radio
                  label={`${index + 1}: ${item} `}
                  checked={option}
                  value={`${index + 1}: ${item} `}
                  onChange={handleChange}
                />
              ))}
            </div>
          ))}
      </div>
    </FormWrap>
  );
};

export default EasyTest;
