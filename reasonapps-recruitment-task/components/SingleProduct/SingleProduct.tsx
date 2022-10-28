import React, { useState } from "react";
import {
  AddToCartButton,
  AddToCartInput,
  GoBackWrapper,
  MainWrapper,
  SingleProductDescription,
  SingleProductDescriptionWrapper,
  SingleProductName,
  SingleProductWrapper,
} from "./styled";
import { ArrowLeft } from "react-feather";
import { ButtonWrapper } from "../ProductCard/styled";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { addToCart, ItemInCart } from "../../store/cartSlice";
import { Product } from "../../pages/products";
import { useRouter } from "next/router";

const SingleProductCard = ({
  id,
  name,
  price,
  description,
  image,
}: Product) => {
  const [itemQty, setItemQty] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();

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
        <GoBackWrapper>
          <ArrowLeft onClick={() => router.back()} />
        </GoBackWrapper>

        <img
          style={{ maxWidth: "550px" }}
          src={image}
          alt={`Photo of ${name}`}
        />

        <SingleProductDescriptionWrapper>
          <SingleProductName>{name}</SingleProductName>
          <h4 style={{ fontSize: "2rem" }}>
            <strong>Price: </strong>${price}
          </h4>
          <SingleProductDescription>{description}</SingleProductDescription>

          <ButtonWrapper
            style={{ maxWidth: "50%", justifyContent: "flex-start" }}
          >
            <AddToCartInput
              min={0}
              max={10}
              size="large"
              value={itemQty}
              controls={true}
              onChange={(e) =>
                onQtyChange(typeof e === "string" ? parseInt(e) : e)
              }
            />

            <AddToCartButton
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
            </AddToCartButton>
          </ButtonWrapper>
        </SingleProductDescriptionWrapper>
      </SingleProductWrapper>
    </MainWrapper>
  );
};

export default SingleProductCard;
