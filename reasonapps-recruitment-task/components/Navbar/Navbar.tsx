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
import { Button, Drawer, Space } from "antd";
import Cart from "../Cart";
import { selectCartState } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DrawerFooter from "../DrawerFooter";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#ffffff");
  const cartState = useSelector(selectCartState);
  const dispatch = useDispatch();

  const showCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

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
      <LogoWrapper>OurShop.com</LogoWrapper>

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

        <MenuItemWrapper
          color={navbarBackgroundColor}
          className={styles.link_card}
          onClick={showCart}
        >
          <ShoppingCart />
        </MenuItemWrapper>
      </LinksWrapper>

      <Drawer
        title="Shopping cart"
        placement="right"
        onClose={closeCart}
        open={isCartOpen}
        footer={<DrawerFooter itemsInCart={cartState} />}
      >
        {cartState.length > 0 && <Cart itemsInCart={cartState} />}

        {cartState.length < 1 && (
          <div>
            <h2>Nothing is here</h2>

            <h4>Add something to the cart first</h4>
          </div>
        )}
      </Drawer>
    </NavbarWrapper>
  );
};

export default Navbar;
