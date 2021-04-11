import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function ContentForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Website </Form.Label>

        <InputGroup>
          <InputGroup.Prepend className="d-md-block d-none">
            <InputGroup.Text>http://</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="inlineFormInputGroup" />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Form.Group>
        <label class="checkbox">
          <input type="checkbox" />
          <span>Allow us to sell your personal details to whomever we want</span>
        </label>
      </Form.Group>
      <Button variant="submit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContentForm;
