import { HeaderStyled, HeaderTitle, LinkContainer, Links } from "./styles";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <HeaderStyled>
        <HeaderTitle>CARTSY</HeaderTitle>
        <LinkContainer>
          <Links to="/">Home</Links>
          <Links to="/contactUs">Contact Us</Links>
          <Links to="/cart">Cart</Links>
        </LinkContainer>
    </HeaderStyled>
  );
};

export default Header;
