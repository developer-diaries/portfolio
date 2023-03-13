import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Footer from "../components/Footer";
import LetsWork from '../components/LetsWork';

const ServicesPage = () => {
    return (
        <Layout pageTitle="Business & Digital Agency">
            <Header heroLogo="/assets/images/logo/logo.svg"
                headerClass="header__white"
                menuClass="main-menu-3"
            />
            <PageHeader title="Portfolio" crumbTitle="Portfolio" />
            <main>
                <Services />
                <LetsWork extraClass={'pt-60'} />
            </main>
            <Footer />
        </Layout>
    );
};

export default ServicesPage;