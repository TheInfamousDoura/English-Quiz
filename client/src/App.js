import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartingPage from "./pages/StartingPage";
import Quiz from "./pages/Quiz";
import Rank from "./pages/Rank";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <div className="App-layout">
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/StartingPage" element={<StartingPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
