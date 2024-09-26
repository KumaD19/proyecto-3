import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteButton,
  ItemDiv,
  Quantity,
  Img,
  ProductName,
  ButtonProducts,
  NameContainer
} from "./styles";
import {
  incrementItem,
  decrementItem,
  deleteCart,
} from "../../../../state/products.slice";

const ShoppingItem = ({ id, name, quantity, img, price }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(id));
  };

  const handleDelete = () => {
    dispatch(deleteCart(id));
  };

  const totalprice = (quantity*price).toFixed(2)

  return (
    <ItemDiv data-testid="shopping-item">
      <NameContainer>
        <Img src={img}></Img>
        <ProductName>{name}</ProductName>
        <p>${totalprice}</p>
      </NameContainer>
      <Quantity data-testid={`quantity-${id}`}>
        <ButtonProducts onClick={handleDecrement}>-</ButtonProducts>
        <p>{quantity}</p>
        
        <ButtonProducts onClick={handleIncrement}>+</ButtonProducts>
      </Quantity>

      <DeleteButton onClick={handleDelete}>Delete Item</DeleteButton>
    </ItemDiv>
  );
};

export default ShoppingItem;
