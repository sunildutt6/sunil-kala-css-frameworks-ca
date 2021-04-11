import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ContentInfo() {
  return (
    <ListGroup >
      <ListGroup.Item>
        <i className="fas fa-envelope  mr-3"></i>
        <a href="#" mailto="hello@yay.com" className="list__item--info">
          hello@yay.com
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <i className="fas fa-phone  mr-3 "></i>123 456 7890
      </ListGroup.Item>
      <ListGroup.Item>
        <i class="fas fa-map-marker-alt  mr-3"></i>
        
         <span className ="inline ">123 Some Street</span>
          <span className ="d-block mx-3 ml-4 ">Somewhere</span>
          <span className ="d-block mx-3 ml-4">Some City</span>
          <span className ="d-block mx-3 ml-4">10000</span>
        
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContentInfo;
