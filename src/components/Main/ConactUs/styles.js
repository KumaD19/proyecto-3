import styled from "styled-components";

const FormStyle = styled.form`
  width: 600px;
  height: fit-content;
  background-color: #f6f4f7;
  margin: auto;
  padding: 40px 50px;
  border-radius: 15px;
  border: 1px solid #444;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;

  gap: 8px;
  label {
    font-size: 0.9rem;
    color: #000000;
    font-weight: 500;
  }

  @media screen and (max-width: 50.125rem) {
    width: 80%;
    padding: 20px 20px;
  }
`;

const FormContainer = styled.section`
  background-color: #889489;
  padding: 100px 0;

  h4 {
    font-size: 1.5rem;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 50px;
  }
`;

const InputStyled = styled.input`
  padding: 12px 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #8f9690;
  color: #000000;
 

  &::placeholder {
    color: #000000;
  }
`;

const TextAreaStyle = styled.textarea`
  padding: 12px 15px;
  width: 100%;
  height: 300px;
  resize: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #8f9690;
  color: #000000;
 

  &::placeholder {
    color: #000000;
  }
`;

const ButtonContact = styled.button`
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: #000000;
  color: #ffffff;

`;

export { FormStyle, InputStyled, TextAreaStyle, ButtonContact, FormContainer };
