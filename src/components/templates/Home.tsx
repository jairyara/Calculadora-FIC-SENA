import React from 'react';
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";
import Calculator from "@organisms/Calculator";

const Home = () : JSX.Element  => {

    return (
        <div>
            <Header/>
            <Calculator />
            <Footer />
        </div>
    );
}

export default Home;