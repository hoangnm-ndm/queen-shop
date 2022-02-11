import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import BG1 from "../../../Images/BG/1.png";
import BG2 from "../../../Images/BG/2.png";
import { Col, Row, Container } from "reactstrap";

const Wrapper = styled.div`
  background-color: #E5E5E5;
  height: 362px;
  width: 100%;
`;
const CustomContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    display: block;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
      left: calc(50% - 59.5px);
    }
    h2 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      color: #000000;
      left: calc(50% - 136px);
    }
    button {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: #33d6fa;
      padding: 13px 23px;
      border-radius: 0;
      left: calc(50% - 86px);
      border: 1px solid #33d6fa;
      background: transparent;
    }
  }
`;

function PopularStyle() {
  return (
    <Wrapper>
      <CustomContainer>
        <img src={BG1} />
        <div>
          <p>NEW BAGS</p>
          <h2>POPULAR STYLE</h2>
          <button>SHOP NOW</button>
        </div>
        <img src={BG2} />
      </CustomContainer>
    </Wrapper>
  );
}
export default PopularStyle;
