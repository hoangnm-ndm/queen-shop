import React, { useState } from "react";
import styled from "styled-components";
import {
    Badge,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
} from "reactstrap";

import { NavLink } from "react-router-dom";

import Logo from "../../Images/Logo/queen-to.png";
import Flag from "../../Images/Icon/icon-flag2.png";
import User from "../../Images/Icon/User.png";
import Angle from "../../Images/Icon/angle-down.png";
import Shopping from "../../Images/Icon/shopping.png";
import Search from "../../Images/Icon/Search.png";

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

const StyledContainer = styled(Container)`
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  line-height: 1;
`;

const Language = styled.div`
  display: flex;
  line-height: 0.6;
  height: 24px;
  padding-top: 68.85px;
  p {
    margin-bottom: 0;
    font-size: 10px;
    text-transform: uppercase;
    margin-left: 3px;
  }
  img {
    height: 7px;
    width: 15px;
  }
`;

const StyledButton = styled.button`
  :focus {
    outline: none;
  }
  background-color: #fff;
  color: #000;
  font-size: 12px;
  border: none;
  margin-bottom: 30px;
  text-transform: uppercase;
`;
const UseFontAweSome = styled.div`
  height:24px;
  display: flex;
  margin-top: 72px;
  > div{
    :nth-child(2) {
      position: relative;
      span {
        font-size: 5px;
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 6px;
        background-color: #BC9051;
      }
  }
`;
export const CustomeIcon = styled.div`
  margin-left: 10px;
  img {
    width: 13px;
    height: 15px;
  }
`;

export const StyledCollapse = styled(Collapse)`
  justify-content: center;
`;
export const StyledNavbar = styled(Navbar)`
  font-size: 12px;
  line-height: 10px;
`;
export const StyledNav = styled(Nav)`
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: #000;
    text-decoration: none;
  }
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
`;
export const StyledNavItem = styled(NavItem)`
  display: flex;
  line-height: 1;
  align-items: center;
  margin-right: 31.92px;
  img {
    height: 5px;
    margin-left: 3px;
  }
`;


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledContainer>
        <img
          src={Logo}
          style={{
            height: "55px",
          }}
        />
        <StyledNavbar expand="md">
          <NavbarToggler onClick={toggle} />
          <StyledCollapse isOpen={isOpen} navbar>
            <StyledNav navbar>
              <StyledNavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/pages">Page</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/shop">Shop</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>

              <StyledNavItem>
                <StyledNavLink to="/blog">Blog</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/contact">Contact Us</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
            </StyledNav>
          </StyledCollapse>
        </StyledNavbar>
        <StyledDiv>
          <Language>
            <img src={Flag} />
            <StyledButton>
              English
              <img
                src={Angle}
                style={{
                  width: "8px",
                  height: "5px",
                }}
              />
            </StyledButton>
            <StyledButton>
              $USD{" "}
              <img
                src={Angle}
                style={{
                  width: "8px",
                  height: "5px",
                }}
              />
            </StyledButton>
          </Language>
          <UseFontAweSome>
            <CustomeIcon href="#">
              <img src={User} />
            </CustomeIcon>
            <CustomeIcon href="#">
              <img src={Shopping} />
              <Badge color="warning">2</Badge>
            </CustomeIcon>
            <CustomeIcon href="#">
              <img src={Search} />{" "}
            </CustomeIcon>
          </UseFontAweSome>
        </StyledDiv>
      </StyledContainer>
    </Wrapper>
  );
};

export default Header;
