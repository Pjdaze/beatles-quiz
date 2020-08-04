import React, { useState, useEffect } from "react";
import FormWrap from "../styled-components/FormWrap";
import { Label, Select, Input } from "semantic-ui-react";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const EasyTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=10&category=26";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(...data.results);
        console.log(data.results[0]);
      });
  }, []);

  return (
    <FormWrap>
      <Label className="labelx">
        <p> {data.length && [data].map((x) => x[1].question)}</p>
      </Label>
      <RadioGroup className="radio-group">
        <RadioButton
          iconInnerSize={22}
          rootColor="#222"
          iconSize={22}
          value="Alan Civil"
        >
          Alan Civil
        </RadioButton>
        <RadioButton
          rootColor="#222"
          iconInnerSize={22}
          iconSize={22}
          value="Arturo Sandoval"
        >
          Arturo Sandoval
        </RadioButton>
        <RadioButton
          iconInnerSize={22}
          rootColor="#222"
          iconSize={20}
          value="William May Stepher"
        >
          William May Stepher
        </RadioButton>
      </RadioGroup>
    </FormWrap>
  );
};

export default EasyTest;
