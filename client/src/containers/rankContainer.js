import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../components/Button";

function RankContainer({ name, score, rank }) {
  const navigate = useNavigate();

  return (
    <Container
      style={{ height: "83vh" }}
      className="d-flex flex-column justify-content-evenly"
    >
      <div className="name">{name}</div>

      <Card className="card-design">
        <Row className="row h-100 w-100">
          <Col xs={12} md={5}>
            <div className="results-container">
              <p className="results-title">Rank</p>
              <p className="results-value">{rank}%</p>
            </div>
          </Col>

          <Col xs={12} md={2}>
            <div className="d-flex justify-content-center align-items-center p-3 h-100">
              <span className="divider"></span>
            </div>
          </Col>

          <Col xs={12} md={5}>
            <div className="results-container">
              <p className="results-title">Score</p>
              <p className="results-value">{score}</p>
            </div>
          </Col>
        </Row>
      </Card>
      <Button
        title={"Try Again"}
        onClick={() => navigate("/StartingPage")}
      ></Button>
    </Container>
  );
}

export default RankContainer;
