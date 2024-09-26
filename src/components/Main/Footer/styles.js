import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin: 20px;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: #333;

   
  }
`;

const FooterSocial = styled.div`
  margin: 20px;

  .social-icons {
    a {
      margin: 0 10px;
      color: #333;
      text-decoration:none;

      &:hover {
        color: #007bff; /* Change color on hover */
      }
    }
  }
`;

const FooterBottom = styled.div`
  background-color: #eaeaea;
  padding: 10px 0;
  margin-top: 20px;
`;

export {FooterContainer, FooterContent, FooterLinks, FooterSocial, FooterBottom}