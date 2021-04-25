import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./footer.scss";

Footer.propTypes = {};

function Footer() {
  return (
    <footer className="footer">
      <Container className="bottomBar">
        <Row className="downBar">
          <Col xs="auto">
            <h1>FOOTER PAGE</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;