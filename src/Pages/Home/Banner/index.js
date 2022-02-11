import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import pic1 from "../../../Images/Slide/Slide2.png";
import pic2 from "../../../Images/Slide/Slide3.png";
import left from "../../../Images/Icon/left.png";
import pic3 from "../../../Images/Slide/Slide1-1.png";
import { Col, Container, Row } from "reactstrap";
import ret from "../../../Images/Icon/return.png";
import dollar from "../../../Images/Icon/dollar.png";
import support from "../../../Images/Icon/support.png";
const Slide1 =styled.div`
  background-color: #D3F5FE;
`;

const Slide2 =styled.div`
  background-color: #E5E5E5;
`;

const Slide3 =styled.div`
  background-color: #F9E0FF;
`;
const Slide = styled.div`
  height: 554px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-item: center`;

const Des = styled.div`
  
`;
const Content = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #5a5858;
  margin-bottom: 20px;
  margin-top: 80px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  margin-bottom: 20px;
  padding: 0px;
`;

const Caption =styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
`;

const ShopLink = styled.a`
  padding: 0;
  margin: 0;
  display: block;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #272626;
  p {
    padding: 0;
    margin: 0;
  }
  img {
    margin-left: 10px;
  }
`;



const ServiceItem = styled(Col)`
  display: flex;
  position: relative;
  img {
    object-fit: contain;
  }
  p {
    margin-bottom: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 48px;
    top: calc(45% - 24px);
    right: 15px;
    background: #bdbdbd;
  }
  &:last-of-type {
    &::after {
      content: none;
    }
  }
`;
const Service = styled(Container)`
  margin-top: 50px;
  padding-bottom: 37px;
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: rgba(146, 141, 141, 0.43);
    bottom: 0;
  }
`;
export default class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Slide1>
            <Container>
              <Slide>
                <div className="Des">
                  <Content>QEEN BAG SHOP</Content>
                  <Title>Special Offer Today Women Supper Dresses</Title>
                  <Caption>We deliver new collection and hot collection from out factory to your doorstep</Caption>
                  <ShopLink href="/shop">
                    <p>SHOP NOW</p>
                    <img src={left} />
                  </ShopLink>
                </div>
                <img src={pic1} style={{maxWidth: "50%", display: "block" }}/>
              </Slide>
            </Container>
          </Slide1>

          <Slide2>
            <Container>
              <Slide>
                <div className="Des">
                  <Content>QEEN BAG SHOP</Content>
                  <Title>Special Offer Today Women Supper Dresses</Title>
                  <Caption>We deliver new collection and hot collection from out factory to your doorstep</Caption>
                  <ShopLink href="/shop">
                    <p>SHOP NOW</p>
                    <img src={left} />
                  </ShopLink>
                </div>
                <img src={pic2} style={{maxWidth: "50%", display: "block" }}/>
              </Slide>
            </Container>
          </Slide2>

          <Slide3>
            <Container>
              <Slide>
                <div className="Des">
                  <Content>QEEN BAG SHOP</Content>
                  <Title>Special Offer Today Women Supper Dresses</Title>
                  <Caption>We deliver new collection and hot collection from out factory to your doorstep</Caption>
                  <ShopLink href="/shop">
                    <p>SHOP NOW</p>
                    <img src={left} />
                  </ShopLink>
                </div>
                <img src={pic3} style={{maxWidth: "50%", display: "block" }}/>
              </Slide>
            </Container>
          </Slide3>
        </Slider>
        <Wrapper>
          <Service>
            <Row>
              <ServiceItem md="4">
                <img src={ret} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>FREE RETURN</p>
                  <p>30 days money back guarantee!</p>
                </div>
              </ServiceItem>
              <ServiceItem md="4">
                <img src={dollar} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>FREE SHIPPING</p>
                  <p> Free shipping on all order</p>
                </div>
              </ServiceItem>
              <ServiceItem md="4">
                <img src={support} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>SUPPORT 24/7</p>
                  <p>We support online 24 hours a day</p>
                </div>
              </ServiceItem>
            </Row>
          </Service>
        </Wrapper>
      </div>
    );
  }
}
