import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import BlogSlide from "./BlogSlide";
import Slider from "react-slick";
import Prev from "../../../Images/Icon/arrowLeft.png";
import Next from "../../../Images/Icon/arrowRight.png";

const LatestBlogs = styled(Container)`
  margin: 50px auto;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.07em;
    color: #000000;
  }
`;
const NextArrow = styled.div``;

const PrevArrow = styled.div`
`;
const Wrap = styled.div`
  .slick-slider {
    margin-bottom: -6px;
  }

  .slick-prev {
    left: 0px;
    z-index: 5;
    top: 53%;
    &:before {
      display: none;
    }
  }
  .slick-next {
    right: 50px;
    top: 53%;
    &:before {
      display: none;
    }
  }
`;
export default function Blogs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <PrevArrow>
        <img src={Prev} />
      </PrevArrow>
    ),
    nextArrow: (
      <NextArrow>
        <img src={Next} />
      </NextArrow>
    ),
  };
  return (
    <>
      <LatestBlogs>
        <h1>LATEST BLOGS</h1>
        <Wrap>
          <Slider {...settings}>
            <div>
              <BlogSlide />
            </div>
            <div>
              <BlogSlide />
            </div>
            <div>
              <BlogSlide />
            </div>
          </Slider>
        </Wrap>
      </LatestBlogs>
    </>
  );
}
