import styled from "styled-components";

export const NavbarWrapper = styled.div`
  z-index: 3;
  width: 100vw;
  height: 10vh;
  min-height: 100px;
  background: #0f0f0f;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  transition: 0.3s all ease;
  box-sizing: border-box;
  min-height: 120px;
  padding: 2vh 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4rem;
  pointer-events: none;

  @media only screen and (max-width: 820px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const MenuItemWrapper = styled.div`
  color: white;
  transform: scale(1.3);
  cursor: pointer;

  & > strong {
    @media only screen and (max-width: 820px) {
      display: none;
    }
  }

  & > .menu__icon {
    display: none;

    @media only screen and (max-width: 820px) {
      display: block;
    }
  }
`;
