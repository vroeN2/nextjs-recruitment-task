import { Button, InputNumber } from "antd";
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  margin-top: 10rem;

  @media (max-width: 820px) {
    padding-top: 0;
    margin-top: 0;
  }
`;

export const SingleProductWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SingleProductDescriptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 3rem;

  @media (max-width: 820px) {
    margin-bottom: 10rem;
    max-width: 100vw;
  }
`;

export const AddToCartInput = styled(InputNumber)`
  width: 40%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 35%;
  margin-left: 2rem;

  @media (max-width: 820px) {
    width: 70%;
  }
`;

export const SingleProductName = styled.h2`
  font-size: 3rem;

  @media (max-width: 820px) {
    margin-top: 2rem;
  }
`;

export const SingleProductDescription = styled.h2`
  font-size: 1.6rem;
  max-width: 70%;

  @media (max-width: 820px) {
    max-width: 100%;
    font-size: 1.3rem;
  }
`;

export const GoBackWrapper = styled.div`
  position: fixed;
  z-index: 3;
  transform: scale(1.5);
  color: #0f0f0f;
  top: 12rem;
  right: 7rem;
  transition: 0.2s all ease;

  &:hover {
    cursor: pointer;
    color: #40a9ff;
  }

  @media (max-width: 820px) {
    color: white;
    top: 5vw;
    left: 5vw;
  }
`;
