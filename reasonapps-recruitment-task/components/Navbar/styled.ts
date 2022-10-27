import styled from "styled-components";

export const NavbarWrapper = styled.div`
  z-index: 3;
  width: 100vw;
  height: 10vh;
  /* background: ${(props) => props.color}; */
  background: #0f0f0f;
  position: fixed;
  top: 0;
  left: 0;
  /* color: ${(props) =>
    props.color === "#ffffff" ? "#1d1d1d" : "#ffffff"}; */
  color: white;
  transition: 0.3s all ease;
  box-sizing: border-box;
  min-height: 120px;
  padding: 2vh 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4rem;
  pointer-events: none;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
`;

export const MenuItemWrapper = styled.div`
  /* color: ${(props) =>
    props.color === "#ffffff" ? "#1d1d1d" : "#ffffff"}; */
  color: white;
  transform: scale(1.3);
  cursor: pointer;
`;
