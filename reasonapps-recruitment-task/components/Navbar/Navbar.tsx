import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavbarWrapper,
  LogoWrapper,
  LinksWrapper,
  MenuItemWrapper,
} from "./styled";
import { ShoppingCart } from "react-feather";
import styles from "../../styles/Home.module.css";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#ffffff");

  const changeScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeScrollY);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  });

  useEffect(() => {
    setNavbarBackgroundColor(scrollY >= 50 ? "#ffffff" : "transparent");
  }, [scrollY]);

  return (
    <NavbarWrapper color={navbarBackgroundColor}>
      <LogoWrapper>MyShop.com</LogoWrapper>

      <LinksWrapper>
        <Link href="/">
          <MenuItemWrapper
            color={navbarBackgroundColor}
            className={styles.link_card}
          >
            <strong>Home</strong>
          </MenuItemWrapper>
        </Link>

        <Link href="/products">
          <MenuItemWrapper
            color={navbarBackgroundColor}
            className={styles.link_card}
          >
            <strong>Products</strong>
          </MenuItemWrapper>
        </Link>

        <Link href="/Products">
          <MenuItemWrapper
            color={navbarBackgroundColor}
            className={styles.link_card}
          >
            <ShoppingCart />
          </MenuItemWrapper>
        </Link>
      </LinksWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
