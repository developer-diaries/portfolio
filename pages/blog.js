import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const BlogPage = () => {
    return (
        <Layout pageTitle="DeveloperDiaries | Business & Digital Agency">
            <PageHeader title="Blog" crumbTitle="Blog"/>
            <Header heroLogo="/assets/images/logo/logo.svg"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>              
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default BlogPage;