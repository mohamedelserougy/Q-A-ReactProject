import React from "react";
import { Accordion, Button } from "react-bootstrap";

const Accordionn = ({ according, deleteAcc, index }) => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{according.question}</Accordion.Header>
          <Accordion.Body className=" d-flex justify-content-between">
            <p>{according.answar}</p>
            <Button
              onClick={() => {
                deleteAcc(index);
              }}
            >
              delete
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Accordionn;
