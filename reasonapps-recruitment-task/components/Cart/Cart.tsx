import React from "react";
import { ItemInCart } from "../../store/cartSlice";
import {
  CartButtonWrapper,
  SingleItemInCartContentWrapper,
  SingleItemInCartWrapper,
} from "./styled";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { Button } from "antd";

interface CartProps {
  itemsInCart: ItemInCart[];
}

const Cart = ({ itemsInCart }: CartProps) => {
  const dispatch = useDispatch();

  return itemsInCart.map((item: ItemInCart) => {
    return (
      <SingleItemInCartWrapper key={item.product.id}>
        <h4>{item.product.name}</h4>
        <h6>
          <strong>Price: </strong>${item.product.price}
        </h6>
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
              <strong>Total:</strong> ${item.qty * parseInt(item.product.price)}
            </h4>

            <Button
              type="primary"
              danger
              size="small"
              onClick={() => dispatch(removeFromCart(item))}
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
