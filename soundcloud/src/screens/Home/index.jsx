import React, { Component } from "react";
import { Col, Container, Row, FormGroup, Input, Button } from "reactstrap";
// import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./home.scss";



Home.propTypes = {};

const listOptions1 = () => {
  let options1 = [];
  for (let i = 0; i < 20; i++) {
    options1.push({
      name: `The song name ${i + 1}`,
      id: i + 1,
    });
  }
  return options1;
};

function Home() {
  return (
    <home className="home">
      <Container className="home__contain">
        {/* <Col className="home__col"> */}
        <Row className="home__row">
          <Col className="home__col1">
            <div className="block1">
              <h1 className="block1__title1">More of what you like</h1>
              <h1 className="block1__title2">
                Suggestions based on what you've liked or played
              </h1>
              <div className="block1__list">
                <div className="block1__logo"></div>
                <FormGroup className="block1__listItem">
                  <select className="block1__control" multiple>
                    data=
                    {listOptions1().map((item) => (
                      <option style={{ color: "white", fontSize: "medium", paddingLeft:20, paddingBottom:5 }}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </div>

              <div className="block1__tail">
                <div className="block1__tail1">
                  <div className="avt"></div>
                  <p className="block1__titleTail">
                    Based on your listening history
                  </p>
                </div>
                <Button className="block1__tailButton">Go to playlist</Button>
              </div>
            </div>
            <line className="line"></line>
            <div className="block2">
              <p className="block2__title1">Charts: New & hot</p>
              <p className="block2__title2">
                Up-and-coming tracks on SoundCloud
              </p>
              <div className="block2__list">
                <ScrollMenu
                  className="blcok2__listItem"
                  arrowLeft={<div className="block2__arrow">{" < "}</div>}
                  arrowRight={<div className="block2__arrow">{" > "}</div>}
                  data={listOptions1().map((item) => (
                    <div className="block2__item">
                      <img
                        className="block2__logoItem"
                        src="https://reactjs.org/logo-og.png"
                      />
                      {item.name}
                    </div>
                  ))}
                />
              </div>
            </div>
          </Col>
          <div className="lineBlock"></div>
          <Col className="home__col2">
            <div className="blocka">
              <div className="blocka__header">
                <h1 className="blocka__title">👥 Who to follow</h1>
                <Button className="blocka__refresh">🔄 Refresh list</Button>
              </div>
              <div className="blocka__line"></div>
              <div className="blocka__list">
                <div className="blocka__avtList"></div>
                <div className="blocka__infoList">
                  <h1 className="blocka__author">AUTHOR</h1>
                  <div className="blocka__detail">
                    <div className="blocka__view">
                      <h1 className="blocka__follows">👥 follows</h1>
                      <h1 className="blocka__tracks">⏩ tracks</h1>
                    </div>
                    <Button className="blocka__add">👤+ Follow</Button>
                  </div>
                </div>
              </div>

              <div className="blocka__list">
                <div className="blocka__avtList"></div>
                <div className="blocka__infoList">
                  <h1 className="blocka__author">AUTHOR</h1>
                  <div className="blocka__detail">
                    <div className="blocka__view">
                      <h1 className="blocka__follows">👥 follows</h1>
                      <h1 className="blocka__tracks">⏩ tracks</h1>
                    </div>
                    <div>
                    <Button className="blocka__add">👤+  Follow</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blocka__list">
                <div className="blocka__avtList"></div>
                <div className="blocka__infoList">
                  <h1 className="blocka__author">AUTHOR</h1>
                  <div className="blocka__detail">
                    <div className="blocka__view">
                      <h1 className="blocka__follows">👥 follows</h1>
                      <h1 className="blocka__tracks">⏩ tracks</h1>
                    </div>
                    <Button className="blocka__add">👤+ Follow</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Col> */}
      </Container>
    </home>
  );
}

export default Home;
