import React from "react";
import { MainWrapper, SingleProductWrapper } from "./styled";
import { ArrowLeft } from "react-feather";

const SingleProductCard = ({
  name,
  price,
  description,
  image,
}: {
  name: string;
  image: string;
  description: string;
  price: string;
}) => {
  return (
    <MainWrapper>
      <SingleProductWrapper>
        <h2>{name}</h2>
        <h4>
          <strong>Price: </strong>${price}
        </h4>
        <img
          style={{ maxWidth: "250px" }}
          src={image}
          alt={`Photo of ${name}`}
        />
        <p>{description}</p>
      </SingleProductWrapper>
    </MainWrapper>
  );
};

export default SingleProductCard;
