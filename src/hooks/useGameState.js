import { useState, useRef } from "react";

const TOTAL_BALLS = 12;
const TOTAL_WICKETS = 2;

export function useGameState() {
  const [runs, setRuns]           = useState(0);
  const [wickets, setWickets]     = useState(0);
  const [ballsLeft, setBallsLeft] = useState(TOTAL_BALLS);
  const [style, setStyle]         = useState("aggressive"); // "aggressive" | "defensive"
  const [phase, setPhase]         = useState("idle");       // "idle" | "bowling" | "batting" | "result" | "over"
  const [lastResult, setLastResult] = useState(null);
  const [commentary, setCommentary] = useState("");

  const isOver = wickets >= TOTAL_WICKETS || ballsLeft <= 0;

  function applyResult(outcome, commentaryText) {
    setLastResult(outcome);
    setCommentary(commentaryText);
    if (outcome === "Wicket") {
      setWickets(w => w + 1);
    } else {
      setRuns(r => r + Number(outcome));
    }
    setBallsLeft(b => b - 1);
    setPhase("result");
  }

  function restart() {
    setRuns(0);
    setWickets(0);
    setBallsLeft(TOTAL_BALLS);
    setStyle("aggressive");
    setPhase("idle");
    setLastResult(null);
    setCommentary("");
  }

  return {
    runs, wickets, ballsLeft, style, setStyle,
    phase, setPhase, lastResult, commentary,
    applyResult, restart, isOver,
    totalWickets: TOTAL_WICKETS, totalBalls: TOTAL_BALLS,
  };
}