import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../services";
import endPoints from "../services/endpoints";
import "../styles/rank.css";
import RankContianer from "../containers/rankContainer";

function Rank() {
  const { state } = useLocation();
  const [rank, setrank] = useState(0);

  useEffect(() => {
    if (state !== null) {
      async function getRank() {
        let res = await apiClient.post(endPoints.rank, {
          score: state.score * 10,
        });
        return res.data;
      }

      getRank()
        .then((data) => data.rank)
        .then((rank) => setrank(rank))
        .catch((err) => console.log(err.message));
    } 
    
  });

  return (
    <RankContianer name={state.name} score={state.score} rank={rank} />
  );
}

export default Rank;
