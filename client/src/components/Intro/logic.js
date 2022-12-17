import { Link } from "react-router-dom";

function Logic({ currentPage, prevPage, nextPage }) {
  return (
    <div className="prev-next-container pt-4">
      {currentPage === 0 ? (
        <span></span>
      ) : (
        <button onClick={prevPage} className="prev-next-button p-2">
          Prev
        </button>
      )}
      {currentPage === 1 ? (
        <Link
          to={"/StartingPage"}
          className="prev-next-button prev-next-button-finish p-2"
        >
          Finish
        </Link>
      ) : (
        <button onClick={nextPage} className="prev-next-button p-2">
          Next
        </button>
      )}
    </div>
  );
}

export default Logic;
