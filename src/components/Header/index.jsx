import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container className="topBar">
        <Row className="upBar">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://by.com.vn/OfPlGt"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⚡️ Get Link Fshare
            </a>
          </Col>
          <Col xs="auto">
            <a className="header__option" href="#">
              🌐 ENGLISH
            </a>
            <a className="header__option" href="#">
              👤 FACEBOOK
            </a>
            <a className="header__option" href="#">
              ℊ+ GOOGLE+
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
