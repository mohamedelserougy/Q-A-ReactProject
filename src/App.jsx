import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Accordionn from "./components/Accordionn";

function App() {
  const [question, setQuestion] = useState("");
  const [answar, setAnswar] = useState("");
  const [according, setAccording] = useState([]);

  const handlesubmit = () => {
    setAccording([...according, { question, answar }]);
    setAnswar("");
    setQuestion("");
  };

  return (
    <>
      <Container className=" py-5 fw-bold fs-5">
        <Row className="d-flex justify-content-center align-items-center m-auto">
          <Col>Frequently Asked Questions and Answers</Col>
          <Col className=" d-flex gap-2">
            <Form.Control
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Question"
            />
            <Form.Control
              value={answar}
              onChange={(e) => setAnswar(e.target.value)}
              type="text"
              placeholder="Answar"
            />
          </Col>
          <Col>
            <Button onClick={handlesubmit}>submit</Button>
          </Col>
        </Row>

        <Row>
          {according.length > 0 ? (
            <Col className=" mt-5">
              {according?.map((item, index) => {
                return <Accordionn key={index} according={item} />;
              })}
            </Col>
          ) : (
            <Col className=" pt-5 text-center">
              <p>No question yet</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default App;
