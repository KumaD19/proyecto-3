import { useState } from "react";
import { ButtonContact, FormStyle, InputStyled, TextAreaStyle, FormContainer } from "./styles";
const ContactUs= ({ onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    message: "",
    number:"",
    name:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <FormContainer>
        <h4>STAY IN TOUCH WITH US</h4>
      <FormStyle>
        <label htmlFor='name'>NAME</label>
        <InputStyled type="text" name="name" id="name" value={form.name} onChange={handleChange}placeholder="Name" required></InputStyled>
        <label htmlFor='email'>EMAIL</label>
        <InputStyled type="email" name="email" id="email" value={form.email} onChange={handleChange}placeholder="Email" required></InputStyled>
        <label for='number'>NUMBER</label>
        <InputStyled type="number" name="number" id="number" value={form.number} onChange={handleChange}placeholder="Number" required></InputStyled>
        <label htmlFor="message">MESSAGE</label>
        <TextAreaStyle id="message" name="message" value={form.message}onChange={handleChange}placeholder="Message" required></TextAreaStyle>
        <ButtonContact>Submit</ButtonContact>
      </FormStyle>
    </FormContainer>
  );
};

export default ContactUs;
