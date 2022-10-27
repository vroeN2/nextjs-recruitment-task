import Link from "next/link";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 10vh;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f0f;
  flex-direction: column;

  & span {
    font-size: 12rem;
  }
`;

const WrongPage = () => {
  return (
    <ErrorWrapper>
      <Title>
        <span>Dang.</span>
        <br />
        <hr style={{ width: "100%", marginTop: "-3rem" }} />
        <br />
        Looks like nothing is here
        <br /> <br /> <br />
        <Link href={"/"}>go back to homepage</Link> or{" "}
        <Link href={"/products"}> go back to products list</Link>
      </Title>
    </ErrorWrapper>
  );
};

export default WrongPage;
