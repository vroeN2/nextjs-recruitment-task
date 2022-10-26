import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { Product } from "../../pages/products";
import { StyledCard } from "../styled";

const ProductCard = ({ id, name, image, price }: Product) => {
  return (
    <Link href={`product/${name}`} key={id}>
      <StyledCard>
        <h2>{name}</h2>
        <h4>
          <strong>Price: </strong>${price}
        </h4>
        <img
          style={{ maxWidth: "250px" }}
          src={image}
          alt={`Photo of ${name}`}
        />
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
