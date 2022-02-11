import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Slide from "./Slide";
import Slider from "react-slick";
import Prev from "../../../Images/Icon/arrowLeft.png";
import Eclip from "../../../Images/Icon/Ellipse.png";
import Next from "../../../Images/Icon/arrowRight.png";
const Wrapper = styled(Container)`
  h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.07em;
    color: #000000;
    margin-top: 70px;
  }
  ul{
    display: flex;
    list-style: none;
    justify-content: flex-end;
    li{
      display: flex;
      a{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #3E3C3C;
        &:hover{
            text-decoration: none;
        }
      }
    }
  }
`;
const NextArrow = styled.div`

`;

const PrevArrow = styled.div`

`;
const Wrap = styled.div`

  .slick-slider {
    margin-bottom: -6px;
  }
  
  .slick-prev{
    left: 0px;
    z-index: 5;
    &:before{
      display: none; 
    }
  }
  .slick-next{
    right: 40px;
    &:before{
      display: none; 
    }
  }
`;
export default function Product() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow><img src={Next}/></NextArrow>,
      prevArrow: <PrevArrow> <img src={Prev}/></PrevArrow> 
    };
    return (
      <Wrapper>
        <h2>TOP INTERESTING</h2>
        <ul>
            <li><a href ="#">NEW ARIVALS <img src ={Eclip} 
            style={{marginLeft:"62px",marginRight: "52px"}}/> 
            </a></li>
            <li><a href ="#">FEATURED <img src ={Eclip} 
              style={{marginLeft:"42px",marginRight: "67px"}}/>
            </a></li>
            <li><a href ="#">ON SALE</a></li>
        </ul>

        <Wrap>
          <Slider {...settings}>
            <div>
              <Slide />
            </div>
            <div>
              <Slide />
            </div>
            <div>
              <Slide />
            </div>
          </Slider>
        </Wrap>
      </Wrapper>
    );
  }
  


   

