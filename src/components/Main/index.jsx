import React from "react";
import { Col, Container, Row, Button, FormGroup, Input } from "reactstrap";

import "./Main.scss";

Main.propTypes = {};

function Main() {
  return (
    <header className="main">
      <Container-fluid className="hero">
        <div className="hero__banner">
          <h1 className="hero__title">GET LINK FSHARE</h1>
          <h1 className="hero__paragraph">
            Get link VIP Fshare, tải nhanh link Fshare tốc độ cao miễn phí không
            giới hạn. Hiện tại Get link Fshare đang bảo trì, tỉ lệ thành công
            ngẫu nhiên
          </h1>
          <div className="hero__getLink">
            <FormGroup>
              <Input
                className="hero__input"
                type="url"
                name="link"
                id="exampleUrl"
              />
            </FormGroup>
            <Button className="hero__button">GET LINK</Button>
          </div>
        </div>
      </Container-fluid>

      <Container className="main">
        <Row className="main__body">
          <Col xs="auto">
            <p className="main__title">⚡︎ Get link VIP Fshare</p>
            <p className="main__paragraph">
              Get link Fshare cho phép bạn lấy link download VIP, leech link
              Fshare tốc độ nhanh nhất không cần tài khoản VIP, tải nhanh link
              VIP Fshare miễn phí không giới hạn.
            </p>
          </Col>

          <Col xs="auto">
            <p className="main__title">⏏︎ Share Link VIP Max Speed</p>
            <p className="main__paragraph">
              Thay thế www.fshare.vn thành getlinkfshare.com, nghĩa là nếu bạn
              muốn chia sẻ link Fshare tốc độ cao thì chỉ cần thay thế bằng link
              của Getlinkfshare như sau: Liên kết Fshare:
              https://www.fshare.vn/file/ABCDEFGHIJKL Sẽ chuyển thành:
              https://getlinkfshare.com/file/ABCDEFGHIJKL
            </p>
          </Col>

          <Col xs="auto">
            <p className="main__title">⌲ Get link Fshare with 1 click</p>
            <p className="main__paragraph">
              Kéo và thả Get Link Fshare vào thanh Bookmark để get link Fshare
              chỉ với 1 click, không cần phải copy paste nữa
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="cmt">
        <h1 className="cmt__title">📥 COMMEMTS</h1>
        <div className="input_box">
          <FormGroup>
            <Input
              className="cmt__input"
              type="text"
              name="text"
              id="exampleText"
            />
          </FormGroup>
        </div>
      </Row>
    </header>
  );
}

export default Main;
