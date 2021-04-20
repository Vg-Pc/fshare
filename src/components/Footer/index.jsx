import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";

Footer.propTypes = {};

function Footer() {
  return (
    <header className="footer">
        <Container className="bottomBar">
          <Row className="downBar">
            <Col xs="auto">
              <p className="footer__title">Get Link Fshare</p>
            </Col>
            
            <Col xs="auto">
              <a className="footer__option" href="#">THE DEVELOPER</a>
              <span className="footer__span">/</span>
              <a className="footer__option" href="#">🌐 ENGLISH</a>
              <span className="footer__span">/</span>
              <a className="footer__option" href="#">👤 FACEBOOK</a>
              <span className="footer__span">/</span>
              <a className="footer__option" href="#">ℊ+ GOOGLE+</a>
            </Col>
          </Row>
        </Container>
    </header>
  );
}

export default Footer;
