import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ContentAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img variant="top" src="../images/Tab images/tab-1.jpg" />
            <div className="d-flex justify-content-center my-3   ">
              <a className="card__Social--icon" href="#">
                Share
              </a>
              <a className="px-3 card__Social--icon" href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a className="card__Social--icon" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img variant="top" src="../images/Tab images/tab-2.jpg" />
            <div>
              <a className="" href="#">
                Share
              </a>
              <a className="" href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a className="" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Third
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img variant="top" src="../images/Tab images/tab-3.jpg" />
            <div>
              <a className="" href="#">
                Share
              </a>
              <a className="" href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a className="" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ContentAccordion;
