import {
  FooterAbout,
  FooterContainer,
  FooterLogo,
  LogoImg,
  FooterNav,
  FooterLink,
  FooternavLinks,
  FooterWrapper,
  FooterEnd,
  FooterSign,
  FooterIcon,
  FooterIcons,
} from "./FooterElement";
import logo from "../../assets/shared/desktop/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterNav>
          <FooterLogo to="/">
            <LogoImg src={logo} />
          </FooterLogo>
          <FooternavLinks>
            <FooterLink to="/" data-active="active">
              Home
            </FooterLink>
            <FooterLink to="/headphone" data-active="active">
              Headphones
            </FooterLink>
            <FooterLink to="/speaker" data-active="active">
              spekaer
            </FooterLink>
            <FooterLink to="/earphone" data-active="active">
              earphone
            </FooterLink>
          </FooternavLinks>
        </FooterNav>
        <FooterAbout>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterAbout>
        <FooterEnd>
          <FooterSign>
            Challenge By
            <a
              href="https://www.frontendmentor.io/challenges"
              aria-label="to front end mentor page"
              rel="nofollow noopener noreferrer"
            >
              {" "}
              Front end mentor
            </a>
          </FooterSign>
          <FooterIcons>
            <FooterIcon to="#">
              <FaFacebook size={28} />
            </FooterIcon>
            <FooterIcon to="#">
              <FaTwitter size={28} />
            </FooterIcon>
            <FooterIcon to="#">
              <FaInstagram size={28} />
            </FooterIcon>
          </FooterIcons>
        </FooterEnd>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
