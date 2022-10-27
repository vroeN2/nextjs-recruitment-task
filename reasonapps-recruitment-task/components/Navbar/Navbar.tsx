import Link from "next/link";
import React, { useState } from "react";
import {
  NavbarWrapper,
  LogoWrapper,
  LinksWrapper,
  MenuItemWrapper,
} from "./styled";
import { Home, ShoppingBag, ShoppingCart } from "react-feather";
import styles from "../../styles/Home.module.css";
import { Drawer } from "antd";
import Cart from "../Cart";
import { selectCartState } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import DrawerFooter from "../DrawerFooter";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartState = useSelector(selectCartState);

  const showCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <NavbarWrapper>
      <LogoWrapper>OurShop.com</LogoWrapper>

      <LinksWrapper>
        <Link href="/">
          <MenuItemWrapper className={styles.link_card}>
            <Home className="menu__icon" />

            <strong>Home</strong>
          </MenuItemWrapper>
        </Link>

        <Link href="/products">
          <MenuItemWrapper className={styles.link_card}>
            <ShoppingBag className="menu__icon" />

            <strong>Products</strong>
          </MenuItemWrapper>
        </Link>

        <MenuItemWrapper className={styles.link_card} onClick={showCart}>
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
