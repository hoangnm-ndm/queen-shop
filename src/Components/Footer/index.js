import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import styled from "styled-components";
import Logo from "../../Images/Footer/logo2.png";
import Address from "../../Images/Footer/address.png";
import Phone from "../../Images/Footer/phone.png";
import Mail from "../../Images/Footer/iconphongthu.png";
import Facebook from "../../Images/Footer/facebook.png";
import Twitter from "../../Images/Footer/twitter.png";
import Instagram from "../../Images/Footer/instagram.png";
import Printest from "../../Images/Footer/prinstest.png";
import Wifi from "../../Images/Footer/wifi.png";

const FooterTop = styled.div`
    background-color: #fff;
    padding: 100px 0px 60px;
    color: #000;
`;

const ImageLogo = styled.div`
    margin-bottom: 55px;
`;

const Title = styled.div`
    margin: 55px 0;
    text-transform: uppercase;
    font-size: 24px;
`;

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-bottom: 30px;
    p {
        text-align: center;
        font-size: 12px;
        margin: 0 0 0 4px;
        padding-top: 6px;
    }
`;

const Social = styled.div`
    background-color: #D3F5FE;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    img {
        width: 100%;
    }
`;

const InforItem = styled.p`
    font-size: 24px;
`;

const FooterBottom =styled.div`
    background-color: #4E3F3F;
    color: #fff;
    p {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 700;
        padding: 65px 0px;
    }
`;
function index(props) {
    return (
        <div>
            <FooterTop>
                <Container>
                    <Row>
                        <Col md="3">
                            <ImageLogo>
                                <img src={Logo} />
                            </ImageLogo>
                            <Item>
                                <div><img src={Address} /></div>
                                <p>214 Nguyễn Lương Bằng Đống Đa Hà Nội</p>
                            </Item>
                            <Item>
                                <div><img src={Phone} /></div>
                                <p>07337645223</p>
                            </Item>
                            <Item>
                                <div><img src={Mail} /></div>
                                <p>motbannamgiauten@gmail.com</p>
                            </Item>
                            <Item>
                                <Social><img src={Facebook} /></Social>
                                <Social><img src={Twitter} /></Social>
                                <Social><img src={Instagram} /></Social>
                                <Social><img src={Printest} /></Social>
                                <Social><img src={Wifi} /></Social>
                            </Item>
                        </Col>
                        <Col md="3">
                            <Title>
                                information
                            </Title>
                            <InforItem>
                                About Us
                            </InforItem>
                            <InforItem>
                                Delivery Infomation
                            </InforItem>
                            <InforItem>
                                Frequently Questions
                            </InforItem>
                            <InforItem>
                                Services
                            </InforItem>
                        </Col>
                        <Col md="3">
                            <Title>
                                FEATURED PRODUCT
                            </Title>
                            <InforItem>
                                About Us
                            </InforItem>
                            <InforItem>
                                Delivery Infomation
                            </InforItem>
                            <InforItem>
                                Frequently Questions
                            </InforItem>
                            <InforItem>
                                Services
                            </InforItem>
                        </Col>
                        <Col md="3">
                            <Title>
                                BEST SELLERS
                            </Title>
                            <InforItem>
                                About Us
                            </InforItem>
                            <InforItem>
                                Delivery Infomation
                            </InforItem>
                            <InforItem>
                                Frequently Questions
                            </InforItem>
                            <InforItem>
                                Services
                            </InforItem>
                        </Col>
                    </Row>
                </Container>
                
            </FooterTop>
            <FooterBottom>
                <Container>
                    <p>Copyright © 2020 baobinhtheme. All Rights Reserved</p>
                </Container>
            </FooterBottom>
        </div>
    );
}

export default index;
