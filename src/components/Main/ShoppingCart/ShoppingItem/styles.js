import styled from "styled-components";

const ItemDiv = styled.div`
  background-color: #f6f4f7;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 8px 50px;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  justify-content: space-between;
  @media screen and (max-width: 52.688rem) {
    width: 100%;
  }
  @media screen and (max-width:47.438rem){
    flex-direction:column;
    height:fit-content;
  }
`;

const Quantity = styled.div`
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;

  border: solid 1px #000000;
  padding: 5px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const DeleteButton = styled.div`
  padding: 10px;
  background-color: #1d1c1c;
  color: #eee;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
`;

const ProductName = styled.p`
  font-size:clamp(0.8rem,2.5vw,0.4rem);
`;

const ButtonProducts = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #889489;
  color: #000;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 20px;
  @media screen and (max-width:47.438rem){
    flex-direction:column;
   
    text-align:center;
  }
`;
export {
  ItemDiv,
  Quantity,
  DeleteButton,
  Img,
  ProductName,
  ButtonProducts,
  NameContainer,
};
