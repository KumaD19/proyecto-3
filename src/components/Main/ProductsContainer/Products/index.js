import { useDispatch } from "react-redux";
import { ProductStyled, Button, Img, InfoContainer } from "./styles";
import { addCart } from "../../../../state/products.slice";

const Products = ({ name, price, id, img }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCart({ name, id, img, price, quantity: 1 }));
  };

  return (
    <ProductStyled>
      <Img src={img} alt={name}></Img>
      <InfoContainer>
        <p>{name}</p>
        <p>${price}</p>
      </InfoContainer>
      <Button onClick={handleAdd}>Add To Cart</Button>
    </ProductStyled>
  );
};

export default Products;
