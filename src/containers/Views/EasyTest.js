import React from "react";
import FormWrap from "../styled-components/FormWrap";
import { Label, Select, Input } from "semantic-ui-react";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const EasyTest = () => {
  return (
    <FormWrap>
      <Label className="labelx">Who Played French Horn In For No One</Label>
      <RadioGroup className="radio-group">
        <RadioButton iconSize={20} value="Alan Civil">
          Alan Civil
        </RadioButton>
        <RadioButton iconSize={20} value="Arturo Sandoval">
          Arturo Sandoval
        </RadioButton>
        <RadioButton iconSize={20} value="William May Stepher">
          William May Stepher
        </RadioButton>
      </RadioGroup>
    </FormWrap>
  );
};

export default EasyTest;
