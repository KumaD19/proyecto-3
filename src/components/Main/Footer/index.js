import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  FooterSocial,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Returns</a>
            </li>
            <li>
              <a>Shipping Info</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </FooterLinks>

        <FooterLinks>
          <h4>About Us</h4>
          <ul>
            <li>
              <a>Our Story</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </FooterLinks>

        <FooterSocial>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </FooterSocial>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
