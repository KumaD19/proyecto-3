import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import { Description, Hero, ImageContainer, ImageDesign, ImageDesignMiddle, Section, Title } from "./styles";
import { fetchProducts } from "../../../state/products.slice";
import { FAILED, IDLE, LOADING } from "../../../state/status";
import girlModelLevis from "../../../assets/img/girl-modeling-levis.jpg";
import manDenim from "../../../assets/img/man-modeling-denim.jpg";
import manPants from "../../../assets/img/man-modeling-pants.jpg";
const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === IDLE) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <>
      <Hero>
        <Title>CARTSY</Title>
        <Description>Where Style Meets Convenience.</Description>
        <ImageContainer>
          <ImageDesign src={girlModelLevis} alt="Girl modeling levis clothes" />
          <ImageDesignMiddle src={manDenim} alt="Man modeling denim" />
          <ImageDesign src={manPants} alt="Man modeling pants" />
        </ImageContainer>
      </Hero>
      <Section data-testid="products-container">
        {products.map((product) => {
          const { id, title, price, image } = product;
          return (
            <Products name={title} key={id} price={price} id={id} img={image} />
          );
        })}
        {status === LOADING && <p>Loading products</p>}

        {status === FAILED && <p>Error loading products</p>}
      </Section>
    </>
  );
};

export default ProductsContainer;
