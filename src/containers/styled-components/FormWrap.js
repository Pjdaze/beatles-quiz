import styled from "styled-components";

const FormWrap = styled.form`
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  align-items: center;
  box-shadow: 0 0 7px 0px #777;
  padding: 50px 25px 25px 25px;

  line-height: 1.5em;
  font-family: "Titillium Web";
  text-align: center;
  overflow: scroll;
  margin-top: 100px;
  position: relative;
  width: 90%;
  max-width: 600px;

  min-height: 630px;
  .radio-group {
    width: 65%;
    margin: 20px;
  }

  h3,
  label,
  .labelx {
    margin-top: 1px;
    background-color: #32cfa4;
    font-size: calc(18px + 0.4vw);
    font-weight: normal;
    letter-spacing: 1px;
    font-family: "Roboto";
  }

  .button-style {
    cursor: pointer;
    font-size: calc(11px + 0vw);
    font-weight: 400;
    font-family: "Titillium Web";

    border-radius: 7px;
    padding: 12px;
    background-color: #424874;
    border: 0.1px solid #404896;
    -webkit-box-shadow: inset 0 0 0px 2px #f5f5f5;
    -moz-box-shadow: inset 0 0 0px 2px #f5f5f5;
    box-shadow: inset 0 0 0px 2px #f5f5f5;
    margin-top: 12px;
    box-sizing: border-box;
    color: #fff;
    &:hover {
      background: #424874;
      color: #fff;
    }
  }
`;

export default FormWrap;
