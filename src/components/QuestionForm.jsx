import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const QuestionForm = ({
  question,
  answar,
  setAnswar,
  setQuestion,
  handlesubmit,
}) => {
  return (
    <>
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
    </>
  );
};

export default QuestionForm;
