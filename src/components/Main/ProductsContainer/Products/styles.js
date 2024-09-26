import styled from "styled-components";

const ProductStyled = styled.div`
  width: 240px;
  height: 400px;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #F6F4F7;
  border-radius: 5px;
  text-align:center;
  transition: ease-in .2s;
  cursor:pointer;
  &:hover{
    transform:translateY(-5px);
  }
    
`;

const InfoContainer= styled.div`

  height:100px;
`;

const Button = styled.button`
  border: none;
  background-color: #273126;
  color: #eee;
  cursor:pointer;
  padding:10px;
  transition: ease-in .2s;

  &:hover{
    background-color:#000000;

  }
`;

const Img = styled.img`
  width:200px;
  height:200px;
  border:solid 1px #000000;
  border-radius:5px;

`;

export { ProductStyled, Button, Img, InfoContainer };
