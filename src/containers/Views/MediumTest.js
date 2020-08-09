import React from "react";
import FormWrap from "../styled-components/FormWrap";
import { Input, Button } from "semantic-ui-react";
const MediumTest = () => {
  const [data, setData] = useState("");
  return (
    <FormWrap>
      <input type="text"></input>
      <Button>Set Name</Button>
    </FormWrap>
  );
};

export default MediumTest;
