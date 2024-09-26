import styled from "styled-components";

const Section = styled.section`
  background-color: #dcdadd;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;

const PCartEmpty = styled.p`
margin-top:50px;
color: red;

`

const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;

  align-items: center;
  padding-bottom: 40px;
`;

const BuyButton = styled.button`
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border: none;
  border: solid 1px #000000;
  background-color: #285246;
  color:#eee;
`;
const EmptyButton = styled.button`
  cursor: pointer;
  padding: 8px;
  width: 80%;
  border: none;
  border: solid 1px #000000;
  background-color:#428773;
  color:#eee;
`;

export { Section, BuyContainer, BuyButton, EmptyButton, PCartEmpty };
