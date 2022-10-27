import React, { useEffect, useState } from "react";
import { ItemInCart } from "../../store/cartSlice";
import { DrawerFooterWrapper } from "./styled";

type DrawerFooterProps = {
  itemsInCart: ItemInCart[];
};

const DrawerFooter = ({ itemsInCart }: DrawerFooterProps) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      itemsInCart
        .map((item: ItemInCart) => item.qty * parseInt(item.product.price))
        .reduce((prev, curr) => prev + curr, 0)
    );
  });
  return (
    <DrawerFooterWrapper>
      <h2>
        <strong>TOTAL:</strong>
      </h2>

      <h2>
        <strong>${totalPrice}</strong>
      </h2>
    </DrawerFooterWrapper>
  );
};

export default DrawerFooter;
