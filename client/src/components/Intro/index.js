import { useState } from "react";
import Card from "react-bootstrap/Card";
import "../../styles/intro.css";
import "../../styles/globals.css";
import Logic from "./logic";

function Intro() {
  const pages = [
    {
      title: "Definitions",
      paragraphs: [
        "1- Adverb: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "2- Adjective: sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "3- Noun: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        "4- Verb: quis nostrud exercitation ullamco laboris nisi ut aliquip",
      ],
    },
    {
      title: "Instructions",
      paragraphs: [
        "1- Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "2- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "3- Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    let next = currentPage + 1;
    setCurrentPage(next);
  };
  const prevPage = () => {
    let prev = currentPage - 1;
    setCurrentPage(prev);
  };

  return (
    <div
      style={{ height: "83vh" }}
      className="d-flex flex-column justify-content-center "
    >
      <Card bg="white" text="black" className="card-design">
        <Card.Header bsPrefix="card-design-header">
          {pages[currentPage].title}
        </Card.Header>

        <Card.Body>
          <div className="card-design-body">
            {pages[currentPage].paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Logic
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default Intro;
