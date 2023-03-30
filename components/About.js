
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const About = ({subTitle, titleFirst, titleSecond}) => {
    return (
        <section className="about__area fix p-relative pt-120 pb-120 about__pb">
            <Container>
                <Row>                        
                    <Col xxl={7} xl={8} lg={10} md={10}>                            
                        <div className="about__title mb-80">
                            <SectionTitle subTitle={subTitle}
                            titleFirst={titleFirst} 
                            titleSecond={titleSecond}/>  
                        </div>
                    </Col>
                </Row>
                <Row>                        
                    <Col xl={6} lg={6}>                            
                        <div className="about__thumb">
                            <div className="about__thumb-shape">
                                <img className="about-s-1 d-none d-lg-block" src="/assets/images/shape/about/about-s-1.png" alt=""/>
                                <img className="about-s-2 d-none d-md-block" src="/assets/images/shape/about/about-s-2.png" alt=""/>
                            </div>
                            <div className="about__thumb-image">
                                <img src="/assets/images/about/about-us.jpeg" alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 5, offset: 1 }} lg={6}>                            
                        <div className="about__content">
                            <p>Our IT company provides cutting-edge solutions and top-quality service to meet your business objectives. With a team of highly skilled professionals who stay up-to-date with the latest advancements, we offer innovative and effective solutions to help your business thrive. </p>
                            <p>We prioritize open communication and collaboration with our clients, building strong relationships based on transparency and honesty. Contact us today to learn more about how we can help you achieve your business goals.</p>
                           {/* <ul>
                                <li>Sea of Tranquility dispassionate observer dream.</li>
                                <li>Muse about as a patch of light brain is the seed of intelligence.</li>
                                <li>The only home we`ve ever known dream of the mind`s eye.</li>
                            </ul> */}
                        </div>
                        <div className="about__counter-bg d-none d-sm-block">
                        <div className="about__counter-content d-flex">
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={50} duration={5} />+                                        
                                    </h2>
                                    <p>Project Delivered</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={100} duration={5} />+                                        
                                    </h2>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                    <CountUp end={3000} duration={5} />+                                        
                                    </h2>
                                    <p>Total Coffees</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;