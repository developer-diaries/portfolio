
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const Facts = () => {
    return (
        <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
                <Container>
                    <Row>
                        <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
                            <div className="facts__thumb">
                                <div className="facts__thumb-shape">
                                    <img className="facts-s-1" src="/assets/images/shape/facts/facts-s-1.png" alt=""/>
                                    <img className="facts-s-2" src="/assets/images/shape/facts/facts-s-2.png" alt=""/>
                                    <img className="facts-s-3" src="/assets/images/shape/facts/facts-s-3.png" alt=""/>
                                    <img className="facts-s-4 d-none d-md-block" src="/assets/images/shape/facts/facts-s-4.png" alt=""/>
                                </div>
                                <div className="facts__thumb-image">
                                    <img src="/assets/images/facts/facts-img.jpeg" alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={6} xl={7} lg={7} md={9}>
                            <div className="facts__content">
                                <div className="facts__content-text">
                                    <SectionTitle subTitle="Facts To Know"
                                    titleFirst="Our project will help"
                                    titleSecond="you streamline"
                                    />  
                                    <p>your business processes and improve efficiency. Our IT solutions are tailored to meet your specific needs, providing customized solutions that address your pain points and help you achieve your goals. With our expertise in mobile and web development, as well as cyber security, we can help your business stay ahead of the competition and succeed in today's ever-evolving digital landscape. Trust us to help you achieve your business objectives – contact us today.</p>                                  
                                    {/* <p>The carbon in our apple pies extraordinary claims require extraord evidence permanence of the stars kindling the energy hidden in matter from which we spring emerged.</p> */}
                                </div>
                                <div className="facts__counter-content d-flex">
                                    <div className="facts__counter-text">
                                        <h2>
                                            <CountUp end={100} duration={2} />+
                                        </h2>
                                        <h5>Projects done</h5>
                                        <p>50+ Company</p>
                                    </div>
                                    <div className="facts__counter-text">
                                        <h2>
                                            <CountUp end={500} duration={2} />K
                                        </h2>
                                        <h5>People reached</h5>
                                        <p>totally in the markets</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Facts;