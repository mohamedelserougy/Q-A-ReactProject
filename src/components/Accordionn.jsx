import React from "react";
import { Accordion } from "react-bootstrap";

const Accordionn = ({ according }) => {
  console.log(according);

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{according.question}</Accordion.Header>
          <Accordion.Body>{according.answar}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Accordionn;
