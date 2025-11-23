import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Accordionn from "./components/Accordionn";
import { ToastContainer, toast } from "react-toastify";
import QuestionForm from "./components/QuestionForm";
import Toasts from "./components/Toasts";

function App() {
  const [question, setQuestion] = useState("");
  const [answar, setAnswar] = useState("");
  const [according, setAccording] = useState([]);

  const notify = (message, type) => {
    let progressColor;
    switch (type) {
      case "success":
        progressColor = "green";
        break;
      case "error":
        progressColor = "red";
        break;
    }

    toast(message, {
      type: type,
      progressStyle: { background: progressColor },
    });
  };

  const handlesubmit = () => {
    if (answar && question) {
      setAccording([...according, { question, answar }]);
      notify("Added successfully", "success");
      setAnswar("");
      setQuestion("");
    } else {
      notify("data must be complete.", "error");
    }
  };

  const deleteAcc = (accIndex) => {
    const filltedAcc = according.filter((_, index) => index !== accIndex);
    setAccording(filltedAcc);
    notify("Deleted successfully", "success");
  };

  const deleteAll = () => {
    setAccording([]);
    notify("Deleted successfully", "success");
  };

  return (
    <>
      <Container className=" py-5 fw-bold fs-5">
        <QuestionForm
          question={question}
          answar={answar}
          setQuestion={setQuestion}
          setAnswar={setAnswar}
          handlesubmit={handlesubmit}
        />

        <Row>
          {according.length > 0 ? (
            <Col className=" mt-5  ">
              {according?.map((item, index) => {
                return (
                  <Accordionn
                    key={index}
                    according={item}
                    deleteAcc={deleteAcc}
                    index={index}
                  />
                );
              })}

              <Button
                className="mt-5 d-block m-auto w-50"
                variant="danger"
                onClick={deleteAll}
              >
                delete all
              </Button>
            </Col>
          ) : (
            <Col className=" pt-5 text-center">
              <p>No question yet</p>
            </Col>
          )}
        </Row>
        <Toasts />
      </Container>
    </>
  );
}

export default App;
