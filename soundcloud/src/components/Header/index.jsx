import React from "react";
import { Col, Container, Row, FormGroup, Input, Button } from "reactstrap";
import "./header.scss";
import { Menu, Dropdown, Upload, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { UploadOutlined } from '@ant-design/icons';


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container className="topBar">
        <Row className="upBar">
          <Row className="first">
            <div className="logo"></div>
            <Button className="first__button">
              <a
                className="first__link first__title"
                href="https://soundcloud.com/discover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </Button>

            <Button className="first__button">
              <a
                className="first__link first__title"
                href="https://soundcloud.com/stream"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream
              </a>
            </Button>

            <Button className="first__button">
              <a
                className="first__link first__title"
                href="https://soundcloud.com/you/library"
                target="_blank"
                rel="noopener noreferrer"
              >
                Library
              </a>
            </Button>
          </Row>

          <Row className="search">
            <div className="mid__search">
              <FormGroup>
                <Input
                  className="mid__input"
                  type="text"
                  name="search"
                  id="exampleText"
                  placeholder="🔍"
                />
              </FormGroup>
            </div>
          </Row>

          <Row>
            <div className="last">
              <div className="last__upload">
                {/* ReactDOM.render( */}
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                {/* , document.getElementById('container'), ); */}
              </div>

              <div className="last__account">
                <div className="avt"></div>
                <div>
                  {/* ReactDOM.render( */}
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Account <DownOutlined />
                    </a>
                  </Dropdown>
                  {/* , document.getElementById('container'), ); */}
                </div>
                {/* <FormGroup>
                <label className="last__acc" for="exampleFormControlSelect1">Account</label>
                <select className="last__accControl" id="formControlSelect">
                  <option>👤 Profile</option>
                  <option>❤️ Like</option>
                  <option>〒 Stations</option>
                  <option>👥 Following</option>
                  <option>👥 Who to follow</option>
                  <option>⭐️ Try to pro</option>
                  <option>⏏️ Tracks</option>
                  <option>🌐 Distribute</option>
                </select>
              </FormGroup> */}
              </div>

              <div className="last__notify">
                <Button className="last__but-no">🛎</Button>
              </div>
              <div className="last__mess">
                <Button className="last__but-me">📨</Button>
              </div>
              <div className="last__more">
                <FormGroup>
                  <label>•••</label>
                  <select class="last__moreControl" id="formControlSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </FormGroup>
              </div>
            </div>
          </Row>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
