import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cross from "../assets/cross.svg";
import oval from "../assets/oval.svg";
import lcloud from "../assets/envelope-left.svg";
import rcloud from "../assets/envelope-right.svg";
import flyplane from "../assets/flying-envel.svg";
import "./Sending.css";

class Sending extends Component {
  state = {};
  render() {
    return (
      <div className={""}>
        <Container className="">
          <Row>
            <Col
              xs={12}
              className={
                "d-flex flex-column justify-content-center sending-screen-size mw-100"
              }
            >
              <div style={{ height: 300 }}>
                <div className={"d-flex flex-row justify-content-center"}>
                  <div
                    className="dot mt-5 d-flex flex-column justify-content-center"
                    style={{}}
                  >
                    <div className={"d-flex flex-row justify-content-center"}>
                      <div
                        className="dot2 d-flex flex-row justify-content-center"
                        style={{}}
                      >
                        <div
                          className={
                            "d-flex flex-column justify-content-center"
                          }
                        >
                          <img
                            src={flyplane}
                            style={{
                              zIndex: 999
                            }}
                            className={"plane-animation"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"pt-3"}>
                <p className={"text-center sendingtext"}>Waiting for DBS...</p>
              </div>

              <img
                src={rcloud}
                className="mt-5 base-animation base-animation-delay-1"
                style={{ position: "absolute", top: "10%" }}
              />
              <img
                src={lcloud}
                style={{ position: "absolute", top: "30%", zIndex: 999 }}
                className="base-animation base-animation-delay-6 d-none d-md-block"
              />
              <img
                src={cross}
                style={{ position: "absolute", top: "40%", zIndex: 999 }}
                className={
                  "base-animation base-animation-delay-5 d-none d-md-block"
                }
              />

              <img
                src={oval}
                style={{ position: "absolute", top: "42%", zIndex: 999 }}
                className={
                  "base-animation base-animation-delay-3 d-none d-md-block"
                }
              />
              <img
                src={cross}
                style={{ position: "absolute", top: "44%", zIndex: 999 }}
                className={"base-animation base-animation-delay-11"}
              />
              <img
                src={cross}
                style={{ position: "absolute", top: "58%", zIndex: 999 }}
                className={
                  "base-animation base-animation-delay-7 d-none d-md-block"
                }
              />
              <img
                src={oval}
                style={{ position: "absolute", top: "58%", zIndex: 999 }}
                className={"base-animation base-animation-delay-8"}
              />
              <img
                src={rcloud}
                style={{ position: "absolute", top: "62%", zIndex: 999 }}
                className={
                  "base-animation base-animation-delay-4 d-none d-md-block"
                }
              />
              <img
                src={oval}
                style={{ position: "absolute", top: "65%", zIndex: 999 }}
                className={"base-animation base-animation-delay-2"}
              />

              <img
                src={lcloud}
                className="mt-5"
                style={{ position: "absolute", top: "75%" }}
                className={"base-animation base-animation-delay-10"}
              />
              <img
                src={oval}
                style={{ position: "absolute", top: "77%", zIndex: 999 }}
                className={
                  "base-animation base-animation-delay-9 d-none d-md-block"
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sending;
