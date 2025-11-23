import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  





  return (
    <>
      <Container className=" py-5 fw-bold fs-5">
        <Row className="d-flex justify-content-center align-items-center m-auto">
          <Col>Frequently Asked Questions and Answers</Col>
          <Col className=" d-flex gap-2">
            <Form.Control type="text" placeholder="Large text" />
            <Form.Control type="text" placeholder="Large text" />
          </Col>
          <Col>
            <Button>submit</Button>
          </Col>
        </Row>

        <Row>
          <Col className=" mt-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
