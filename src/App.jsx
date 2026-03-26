import { useState } from "react";
import { useGameState } from "./hooks/useGameState";
import { COMMENTARY } from "./data/probabilities";
import CricketGround from "./components/CricketGround";
import Scoreboard from "./components/Scoreboard";
import PowerBar from "./components/PowerBar";
import BattingControls from "./components/BattingControls";
import GameOver from "./components/GameOver";
import BallAnimation from "./components/BalllAnimation";
import BatsmanAnimation from "./components/BatsmanAnimation";
import "./App.css";

export default function App() {
  const game = useGameState();

  const [ballPos, setBallPos] = useState(null);
  const [showBat, setShowBat] = useState(false);

  const [animPhase, setAnimPhase] = useState(null); // "bowling" | "shot"
  const [shotTrigger, setShotTrigger] = useState(false);
  const [currentOutcome, setCurrentOutcome] = useState(null);

  // 🎯 Start bowling
  function startBowling() {
    if (game.isOver) return;

    game.setPhase("bowling");
    setAnimPhase("bowling");
  }

  // 🎯 Handle shot click
  function handleShot(outcome) {
    setCurrentOutcome(outcome);
    setShotTrigger(true);
    setAnimPhase("shot");

    // 🎤 commentary
    const lines = COMMENTARY[outcome] || ["..."];
    const line = lines[Math.floor(Math.random() * lines.length)];

    game.applyResult(outcome, line);

    // ⏱ reset after animation
    setTimeout(() => {
      setShotTrigger(false);
      setAnimPhase(null);
      game.setPhase("idle");
    }, 1800);
  }

  return (
    <div className="app-container">
      <h1 className="title">🏏 2D Cricket Game</h1>

      <CricketGround
        ballPos={ballPos}
        showBat={showBat}
        lastResult={game.phase === "result" ? game.lastResult : null}
      />

      {/* 🎬 Animations */}
      <BallAnimation
        phase={animPhase}
        outcome={currentOutcome}
        setBallPos={setBallPos}
        onDone={() => {
          setAnimPhase(null);
          game.setPhase("batting"); // show power bar
        }}
      />

      <BatsmanAnimation
        trigger={shotTrigger}
        setShowBat={setShowBat}
      />

      <div style={{ marginTop: 12 }}>
        <Scoreboard
          runs={game.runs}
          wickets={game.wickets}
          ballsLeft={game.ballsLeft}
          totalBalls={game.totalBalls}
          totalWickets={game.totalWickets}
        />
      </div>

      <BattingControls
        style={game.style}
        setStyle={game.setStyle}
        onBowl={startBowling}
        phase={game.phase}
      />

      {/* 🎯 Power bar */}
      {game.phase === "batting" && (
        <PowerBar
          style={game.style}
          onShot={handleShot}
          active={true}
        />
      )}

      {/* 💬 Commentary */}
      {game.phase === "result" && game.commentary && (
        <div
          style={{
            marginTop: 10,
            color: "#f1c40f",
            fontStyle: "italic",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          💬 {game.commentary}
        </div>
      )}

      {/* 🛑 Game Over */}
      {game.isOver && (
        <GameOver
          runs={game.runs}
          wickets={game.wickets}
          totalBalls={game.totalBalls}
          ballsLeft={game.ballsLeft}
          onRestart={game.restart}
        />
      )}
    </div>
  );
}