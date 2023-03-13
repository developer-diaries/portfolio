import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer__area fix p-relative pt-100 pb-40">
                <div className="footer__shape">
                    <img className="footer-shape-1" src="/assets/images/shape/footer/footer-s-1.png" alt="" />
                    <img className="footer-shape-2" src="/assets/images/shape/footer/footer-s-2.png" alt="" />
                </div>
                <Container>
                    <Row className="mb-50">
                        <Col xl={4} lg={4} md={10} sm={10}>
                            <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                                <div className="footer__widget-logo">
                                    {/* <img src="assets/images/logo/Logo-footer.svg" alt="logo" /> */}
                                    <p>Core object made kolor adipisci elit sed diam nonummy nibh euismod tincidunt laoreet dolore magna grinjon.</p>
                                </div>
                                <div className="footer__widget-social">
                                    <Link href="#">
                                        <a><i className="fa-brands fa-facebook-f"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-twitter"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-instagram"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-youtube"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6}>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Our Services</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="/services-details">
                                                <a>Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details">
                                                <a>marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details">
                                                <a>UI/UX Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details">
                                                <a>E-commerce</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details">
                                                <a>Content Writing</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6}>
                            <div className="footer__widget footer__widget-mt-2">
                                <div className="footer__widget-title">
                                    <h5>Company</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="/about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Our Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={10}>
                            <div className="footer__widget footer__widget-mt">
                                <div className="footer__widget-title">
                                    <h5>Stay Connected</h5>
                                </div>
                                <div className="footer__widget-info">
                                    <div className="footer__widget-address">
                                        <p>66 Broklyn Street, New York
                                            United States of America</p>
                                    </div>
                                    <div className="footer__widget-phone d-flex align-items-center">
                                        <i className="fa-solid fa-phone"></i>
                                        <p>
                                            <Link href="tel:+1166442200">
                                                <a>+11 66 44 22 00</a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="footer__widget-email d-flex align-items-center">
                                        <i className="fa-solid fa-paper-plane"></i>
                                        <p>
                                            <Link href="mailto:info@example.com">
                                                <a>info@example.com</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="footer__copyright">
                                <p>Copyright © 2023
                                    <Link href="">
                                        <a>Şirket</a>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;