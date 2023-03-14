import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="About | Developer Diaries">
            <Header heroLogo="/assets/images/logo/logo.svg"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <PageHeader title="About us" crumbTitle="About us"/>
            <main>
                <About subTitle="We are "
                titleFirst="We are here to make your"
                titleSecond="product look more elegant and stylish"
                />     
                <LetsWork extraClass="mt-165"/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default AboutPage;