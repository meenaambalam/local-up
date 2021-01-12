import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import smallbusiness from "../images/localbusiness3.jpg";
import developer from "../images/developers1.jpg";

function Home() {
  return (
    <div>
      <NavBar />
      <Jumbotron>
        <h1>LocalUP!</h1>
        <div>
        <p>
          Our organization helps small and local businesses with marketing,
          search engine optimization (SEO), and technical services such as
          setting up a website. The goal of our organization is to give small
          local businesses a cost-effective way to market their services. Our
          overall mission is to give local businesses low-cost marketing
          solutions. As well as establish them an e-commerce presence by
          creating them a website where they can sell their goods online.
        </p>
        </div>
      </Jumbotron>
      <Container>
        {/* <div className="middle-container-homepage mt-5">
          <Row className="justify-content-md-center">
            <Col xs={3}>
              <div className="img-card-homepage ">
                <div className="text-center">
                  <img
                    src={developer}
                    alt="Website Builder"
                    className="homepage-image"
                  />
                </div>
              </div>
            </Col>

            <Col xs={6}>
              <div className="card homepage-card p-3 m-5">
                <div className="homepage">
                  <label>
                    <h1 className="text-color">Local UP</h1>
                  </label>
                  <p className="text-color">
                    Our organization helps small and local businesses with
                    marketing, search engine optimization (SEO), and technical
                    services such as setting up a website. The goal of our
                    organization is to give small local businesses a
                    cost-effective way to market their services. Our overall
                    mission is to give local businesses low-cost marketing
                    solutions. As well as establish them an e-commerce presence
                    by creating them a website where they can sell their goods
                    online.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={3}>
              <div className="img-card-homepage card-add-style ">
                <div>
                  <img
                    src={smallbusiness}
                    alt="Website Builder"
                    className="homepage-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </div>
  );
}

export default Home;
