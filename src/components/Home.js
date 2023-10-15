import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "./21BCE5095.jpg";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col>
              <img
                src={profile}
                alt="home pic"
                className="profile-pic"
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Chillara Pavana Vamsi</strong>
              </h1>

              <div
                className="typing"
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
