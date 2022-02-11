import React, { useState } from "react";
import {
  Badge,
  NavbarToggler,
  Container,
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../../Images/Logo/queen-to.png";
import Flag from "../../../Images/Icon/icon-flag2.png";
import User from "../../../Images/Icon/User.png";
import Angle from "../../../Images/Icon/angle-down.png";
import Shopping from "../../../Images/Icon/shopping.png";
import Search from "../../../Images/Icon/Search.png";

const Wrapper = styled.div``;

const StyledContainer = styled(Container)`
  height: 105px;
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  border-bottom: 1px solid #ccc;
  height: 105px;
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

const Language = styled.div`
  display: flex;
  line-height: 0.6;
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

const UseFontAweSome = styled.div`
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
        bottom: 10px;
        background-color: #BC9051;
      }
  }
`;

const CustomeIcon = styled.div`
  margin-left: 10px;
  img {
    width: 13px;
    height: 15px;
  }
`;

const StyledCollapse = styled(Collapse)`
  justify-content: center;
`;
const StyledNavbar = styled(Navbar)`
  font-size: 12px;
  line-height: 10px;
`;
const StyledNav = styled(Nav)`
  margin-left: 20px;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    color: #000;
    text-decoration: none;
  }
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
`;
const StyledNavItem = styled(NavItem)`
  display: flex;
  line-height: 1;
  align-items: center;
  margin-right: 31.92px;
  img {
    height: 5px;
    margin-left: 3px;
  }
`;


const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledDiv>
        <StyledContainer>
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
          <img
            src={Logo}
            style={{
              height: "77px",
            }}
          />
          <UseFontAweSome>
            <CustomeIcon href="#">
              <img src={User} />
            </CustomeIcon>
            <CustomeIcon href="#">
              {" "}
              <Link to="/cart">
              <img src={Shopping} />
              </Link>
              <Badge color="warning">2</Badge>
            </CustomeIcon>
            <CustomeIcon href="#">
              <img src={Search} />{" "}
            </CustomeIcon>
          </UseFontAweSome>
        </StyledContainer>
      </StyledDiv>
      <Container>
        <StyledNavbar expand="md">
          <NavbarToggler onClick={toggle} />
          <StyledCollapse isOpen={isOpen} navbar>
            <StyledNav navbar>
              <StyledNavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/page">Page</StyledNavLink>
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
      </Container>
    </Wrapper>
  );
};

export default Footer;
