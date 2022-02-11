import React from "react";
import { 
    Col, 
    Container, 
    Row, 
    InputGroup, 
    InputGroupAddon, 
    Input, 
    Button } 
from "reactstrap";
import styled from "styled-components";

const Col1 = styled(Col)`
  text-align: center;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
const Col2 = styled(Col)`
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #fff9f9;
    padding: 14px 47.5px 6px 43.5px;
    background: #33d6fa;
  }
  input {
    height: auto;
    &::placeholder {
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #bdbdbd;
    }
  }
`;

const Wrapper = styled.div`
    background-color: rgba(196, 196, 196, 0.58);
    padding-top: 135px;
    padding-bottom: 150px;
`;
function Subscribe() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Col1 md="6">
                <h1>JOIN QEEN NEWSLETTER</h1>
                <p>Subscribe our newsletter and get discount 30% off</p>
                </Col1>
                <Col2 md="6">
                <InputGroup style={{ paddingTop: "9px" }}>
                    <Input placeholder="Enter your email address" />
                    <InputGroupAddon addonType="prepend">
                    <Button>SUBSCRIBE</Button>
                    </InputGroupAddon>
                </InputGroup>
                </Col2>
            </Row>
        </Container>
    </Wrapper>
  );
}

export default Subscribe;
