import React, { useState } from "react";
import Link from "next/link";
import { Product } from "../../pages/products";
import { StyledCard } from "../styled";
import { ButtonWrapper, PriceDisplayWrapper } from "./styled";
import { Button, InputNumber, notification } from "antd";
import { ItemInCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = ({ id, name, image, price, description }: Product) => {
  const [itemQty, setItemQty] = useState(0);
  const dispatch = useDispatch();

  const onQtyChange = (e: number | null) => {
    setItemQty(e ?? 0);
  };

  const addProductToCart = (itemToCart: ItemInCart) => {
    dispatch(addToCart(itemToCart));
    if (itemQty > 0) openNotification();
  };

  const openNotification = () => {
    notification.success({
      message: `${name} x ${itemQty} has been added to the cart!`,
    });
    setItemQty(0);
  };

  return (
    <StyledCard>
      <Link href={`products/${name}`}>
        <div>
          <img
            style={{ maxWidth: "250px" }}
            src={image}
            alt={`Photo of ${name}`}
          />

          <h2
            style={{
              height: "4rem",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {name}
          </h2>

          <PriceDisplayWrapper>
            <strong style={{ fontSize: "2rem", color: "#40a9ff" }}>
              ${price}
            </strong>
          </PriceDisplayWrapper>
        </div>
      </Link>

      <ButtonWrapper>
        <InputNumber
          min={0}
          max={10}
          value={itemQty}
          controls={true}
          style={{ width: "50%" }}
          onChange={(e) => onQtyChange(e)}
        />

        <Button
          style={{ width: "35%" }}
          type="primary"
          onClick={() =>
            addProductToCart({
              qty: itemQty,
              product: {
                id: id,
                description: description,
                image: image,
                name: name,
                price: price,
              },
            })
          }
        >
          Add
        </Button>
      </ButtonWrapper>
    </StyledCard>
  );
};

export default ProductCard;
