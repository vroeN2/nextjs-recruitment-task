import React, { useState } from "react";
import {
  MainWrapper,
  SingleProductDescriptionWrapper,
  SingleProductWrapper,
} from "./styled";
import { ArrowLeft } from "react-feather";
import { ButtonWrapper } from "../ProductCard/styled";
import { Button, InputNumber, notification } from "antd";
import { useDispatch } from "react-redux";
import { addToCart, ItemInCart } from "../../store/cartSlice";
import { Product } from "../../pages/products";

const SingleProductCard = ({
  id,
  name,
  price,
  description,
  image,
}: Product) => {
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
    <MainWrapper>
      <SingleProductWrapper>
        <img
          style={{ maxWidth: "550px" }}
          src={image}
          alt={`Photo of ${name}`}
        />

        <SingleProductDescriptionWrapper>
          <h2 style={{ fontSize: "3rem" }}>{name}</h2>
          <h4 style={{ fontSize: "2rem" }}>
            <strong>Price: </strong>${price}
          </h4>
          <p style={{ fontSize: "1.6rem", maxWidth: "70%" }}>{description}</p>

          <ButtonWrapper
            style={{ maxWidth: "50%", justifyContent: "flex-start" }}
          >
            <InputNumber
              min={0}
              max={10}
              size="large"
              value={itemQty}
              controls={true}
              style={{ width: "40%" }}
              onChange={(e) => onQtyChange(e)}
            />

            <Button
              style={{ width: "25%", marginLeft: "2rem" }}
              type="primary"
              size="large"
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
              Add to cart
            </Button>
          </ButtonWrapper>
        </SingleProductDescriptionWrapper>
      </SingleProductWrapper>
    </MainWrapper>
  );
};

export default SingleProductCard;
