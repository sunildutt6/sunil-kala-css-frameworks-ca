import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentTabs() {
  return (
    <div className="d-none d-md-block">
      <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
        <Tab eventKey="one" title="First">
          <Row>
            <Col md="4">
              <img
                src="../images/Tab images/tab-1.jpg"
                alt="..."
                className="img-thumbnail border-0"
              />
            </Col>
            <Col md="8 d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <a className="pr-2 social_icon " href="#">
                  Share
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="two" title="Second">
          <Row>
            <Col md="4">
              <img
                src="../images/Tab images/tab-2.jpg"
                alt="..."
                className="img-thumbnail  border-0"
              />
            </Col>
            <Col md="8 d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <a className="pr-2 social_icon " href="#">
                  Share
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="three" title="Third">
          <Row>
            <Col md="4">
              <img
                src="../images/Tab images/tab-3.jpg"
                alt="..."
                className="img-thumbnail border-0"
              />
            </Col>
            <Col md="8 d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <a className="pr-2 social_icon " href="#">
                  Share
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a className="pr-2 social_icon" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ContentTabs;
