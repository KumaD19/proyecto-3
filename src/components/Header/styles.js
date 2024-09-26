import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: #273126;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  color: #eee;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Links = styled(Link)`
  color: #f6f4f7;
  cursor: pointer;
  text-decoration: none;
`;

export { HeaderStyled, HeaderTitle, Links, LinkContainer };
