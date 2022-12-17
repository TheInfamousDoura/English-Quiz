import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "../components/Button";

import "../styles/globals.css";

function StartingPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleTextChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <Container>
      <div
        style={{ height: "83vh" }}
        className="d-flex flex-column justify-content-evenly "
      >
        <Card bg="white" text="black" className="card-design">
          <Card.Header bsPrefix="card-design-header">Let's Start</Card.Header>

          <Card.Body>
            <div className="d-flex justify-content-center mt-3">
              <input
                type="text"
                className="input-name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleTextChange}
              />
            </div>
          </Card.Body>
        </Card>

        <Button
          title={"Start Now"}
          disabled={name === "" ? true : false}
          onClick={() => navigate("/quiz", { state: { name: name } })}
        />
      </div>
    </Container>
  );
}

export default StartingPage;
