import styled from "styled-components";

const FormWrap = styled.form`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 7px 0px #777;
  padding: 0px 25px 25px 25px;

  line-height: 1.5em;
  font-family: "Titillium Web";
  text-align: center;

  margin-top: 55px;
  position: relative;
  width: 90%;
  max-width: 600px;

  min-height: 630px;

  h3,
  label {
    margin-top: 1px;

    color: #fff;
    font-size: calc(18px + 0.2vw);
    font-weight: 300;
    letter-spacing: 2px;
    font-family: "Gatintas";
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
