import React, { useState } from "react";
import FormWrap from "../styled-components/FormWrap";
import { Input } from "semantic-ui-react";

const ContactForm = () => {
  const [formData, setFormData] = useState([]);
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setFormValues({ ...formData, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setFormData(formValues);
    console.log(formData);
  };

  return (
    <FormWrap onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:</label>
      <br />

      <Input
        onChange={handleChange}
        type="text"
        name="Name"
        id="Name"
        placeholder="Enter Your Name"
      />
      <br />
      <label htmlFor="name">Email</label>
      <br />
      <Input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        placeholder="Enter Your email"
      />

      <br />

      <label htmlFor="name">Phone Number</label>
      <br />

      <Input
        onChange={handleChange}
        type="text"
        name="Phone Number"
        id="Phone Number"
        placeholder="Enter Phone Number"
      />
      <Input type="submit" />
    </FormWrap>
  );
};

export default ContactForm;
