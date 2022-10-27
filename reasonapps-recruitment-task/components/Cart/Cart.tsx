import React from "react";
import { ItemInCart } from "../../store/cartSlice";
import {
  CartButtonWrapper,
  SingleItemInCartContentWrapper,
  SingleItemInCartWrapper,
} from "./styled";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../store/cartSlice";
import { Button } from "antd";

interface CartProps {
  itemsInCart: ItemInCart[];
}

const Cart = ({ itemsInCart }: CartProps) => {
  const dispatch = useDispatch();

  const onItemRemove = (item: ItemInCart) => {
    dispatch(removeFromCart(item));
    dispatch(updateCart);
  };

  return itemsInCart.map((item: ItemInCart) => {
    return (
      <SingleItemInCartWrapper key={item.product.id}>
        <h3>{item.product.name}</h3>
        <h4>
          <strong>Price per item: </strong>${item.product.price}
        </h4>
        <SingleItemInCartContentWrapper>
          <img
            style={{ maxWidth: "150px" }}
            src={item.product.image}
            alt={`Photo of ${item.product.name}`}
          />

          <CartButtonWrapper>
            <h4>
              <strong>Quantity:</strong> {item.qty}
            </h4>

            <h4>
              <strong>Subtotal:</strong> $
              {item.qty * parseInt(item.product.price)}
            </h4>

            <Button
              type="primary"
              danger
              size="small"
              onClick={() => onItemRemove(item)}
            >
              Remove
            </Button>
          </CartButtonWrapper>
        </SingleItemInCartContentWrapper>
      </SingleItemInCartWrapper>
    );
  });
};

export default Cart;
