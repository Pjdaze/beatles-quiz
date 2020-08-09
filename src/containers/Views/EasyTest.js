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

  const handleChange = (e, { option }) => setOption(option);
  console.log("TEST DATA HERE", testData);
  return (
    <FormWrap>
      <div>
        {testData.length &&
          testData.map((x) => (
            <Radio
              label={x.question}
              name="radioGroup"
              onChange={handleChange}
            />
          ))}
      </div>
    </FormWrap>
  );
};

export default EasyTest;
