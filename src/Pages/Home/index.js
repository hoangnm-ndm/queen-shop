import React from "react";
import Header from "./Header";
import Footer from "../../Components/Footer";
import Banner from "./Banner";
import PopularStyle from "./PopularStyle";
import Blogs from "./Blogs";
import Subscribe from "./Subscribe";
import TopInteresting from "./TopInteresting";
// import Product from "../../Components/Product";
import Product from "./Product";

import { Container } from 'reactstrap';
function Home() {
    return (
    <Container fluid="true">
        <Header />
        <Banner />
        <TopInteresting />

        <Product />
        
        <PopularStyle />
        <Blogs />
        <Subscribe />
        <Footer />
    </Container>
    );
}
export default Home;
