import styled from "styled-components";
import { Row, Input } from "antd";

export const SearchboxWrapper = styled(Row)`
  z-index: 3;
  position: fixed;
  top: 10vh;
  left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #0f0f0f;

  @media only screen and (max-width: 600px) {
    top: auto;
    bottom: 12vh;
    left: 0;
  }
`;

export const Searchbox = styled(Input.Search)`
  width: 60%;
  margin: 1rem 0 2rem;
`;

export const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1600px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledCard = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: white;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  transition: 0.2s all ease;

  & h2,
  h4 {
    color: #0f0f0f;
    transition: 0.2s all ease;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #40a9ff;
    & h2,
    h4 {
      color: #40a9ff;
    }
  }
`;
