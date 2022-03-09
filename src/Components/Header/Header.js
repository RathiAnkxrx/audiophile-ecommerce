import {
  CartIcon,
  CartWrapper,
  Hamburger,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
  HeaderWrapper,
  LogoImg,
  MobileNav,
  MobileNavWrapper,
} from "./HeaderElement";
import { useLocation } from "react-router-dom";
import useWindowScroll from "../../Hooks/useWindowHeight";
import useWindowWidth from "../../Hooks/useWindowWidth";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Store/modalToggle";
import { useEffect, useState } from "react";
import ProductNav from "../../Components/ProductNav";

const Header = () => {
  const { items } = useSelector((state) => state.product);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const SCROLL = useWindowScroll();
  const isScrolled = SCROLL.height >= 390;
  const WIDTH = useWindowWidth();
  const isTablet = WIDTH.width <= 600;
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {});

  return (
    <HeaderContainer bgColor={isHomePage} data-scrolled={isScrolled}>
      <HeaderWrapper borderBot={true}>
        <Hamburger
          src={hamburger}
          onClick={() => setIsClicked((state) => !state)}
        />
        <HeaderLogo to="/home">
          <LogoImg src={logo} alt="audiophile logo" />
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavLink to="/home" data-active="active">
            home{" "}
          </HeaderNavLink>
          <HeaderNavLink to="/headphone" data-active="active">
            Headphone
          </HeaderNavLink>
          <HeaderNavLink to="/speaker" data-active="active">
            Speaker
          </HeaderNavLink>
          <HeaderNavLink to="/earphone" data-active="active">
            Earphone
          </HeaderNavLink>
        </HeaderNav>
        {isTablet && (
          <MobileNavWrapper
            data-scrolled={isScrolled}
            data-open={isClicked}
            onClick={() => setIsClicked((state) => !state)}
          >
            <ProductNav />
          </MobileNavWrapper>
        )}
        <CartWrapper data-amount={items.length}>
          <CartIcon
            src={cart}
            alt="View cart Itens"
            onClick={() => dispatch(toggle())}
          />
        </CartWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
