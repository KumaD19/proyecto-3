import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingItem from "./ShoppingItem";
import {
  BuyButton,
  BuyContainer,
  EmptyButton,
  Section,
  PCartEmpty,
} from "./styles";
import { deleteFullCart, selectCartTotal } from "../../../state/products.slice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const deleteEverything = () => {
    dispatch(deleteFullCart());
  };

  const totalAmount = useSelector(selectCartTotal);

  return (
    <Section data-testid="shopping-cart">
      <h3>Shopping Cart</h3>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => {
            const { id, name, quantity, img, price } = item;

            return (
              <ShoppingItem
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                img={img}
                price={price}
              />
            );
          })}
          <BuyContainer>
            <h3>Total amount: ${totalAmount.toFixed(2)}</h3>
            <BuyButton>Buy Now</BuyButton>
            <EmptyButton onClick={deleteEverything}>Empty Cart</EmptyButton>
          </BuyContainer>
        </>
      ) : (
        <div>
          <PCartEmpty>Cart is empty</PCartEmpty>
        </div>
      )}
    </Section>
  );
};

export default ShoppingCart;
