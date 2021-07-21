import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Container, Col } from "react-bootstrap";
import "./accordion.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import thanks from "./thanks.jpg";
import todo from "./todo.jpg";
class Accordion extends Component {
  state = { clicked: false };
  handleAccordion = () => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  };
  render() {
    return (
      <>
        <Container className="accordionContainer">
          <Row
            className="acordionNavigationRow"
            onClick={() => this.handleAccordion()}
          >
            <Col className="welcomeText" xs={10}>
              <a href="">Welcome</a>
            </Col>{" "}
            <Col xs={2}>
              {this.state.clicked ? (
                <>
                  {" "}
                  <RiArrowDropDownFill className="arrowDown" />{" "}
                </>
              ) : (
                <>
                  <RiArrowDropUpFill className="arrowDown" />
                </>
              )}
            </Col>{" "}
          </Row>
          <Row className= {!this.state.clicked? ("infoRow mt-3") : ("infoRowVisable mt-3")}>
            <Col xs={4} className="imgCol">
              <img src={thanks} className="thanksPhoto" />{" "}
            </Col>
            <Col xs={8} className="textCol">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </Col>
          </Row>
          <Row className= {!this.state.clicked? ("infoRow mt-3") : ("infoRowVisable mt-3")}>
            <Col xs={8} className="textCol">
              <p className="text">
                Exercitation dolore eu fugiatia deseorem iminim veniam, quis
                nostrud ullamco laboris nisi ut aliquip ex ea commodo consequ
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse psum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor iilrunt
                mollit anim id est laborum.{" "}
              </p>
            </Col>
            <Col xs={4} className="imgCol">
              <img src={todo} className="thanksPhoto" />{" "}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Accordion;
