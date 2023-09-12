import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Lili from "../assets/img/Lili.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Lili} alt="Lili" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/liligarciaseveriche/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100004635438662"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/lilianagarciaseveriche/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}