export default function GameOver({ runs, wickets, totalBalls, ballsLeft, onRestart }) {
  const ballsBowled = totalBalls - ballsLeft;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", zIndex: 100, color: "#fff"
    }}>
      <h1 style={{ fontSize: 48, marginBottom: 8 }}>🏏 Game Over!</h1>
      <p style={{ fontSize: 28, color: "#f1c40f" }}>Final Score: {runs} / {wickets}</p>
      <p style={{ color: "#aaa" }}>Balls faced: {ballsBowled}</p>
      <p style={{ fontSize: 20, marginTop: 8 }}>
        {runs >= 50 ? "🌟 Excellent innings!" : runs >= 25 ? "👍 Decent effort!" : "😅 Better luck next time!"}
      </p>
      <button onClick={onRestart}
        style={{
          marginTop: 24, padding: "14px 40px", fontSize: 20,
          background: "#27ae60", color: "#fff", border: "none",
          borderRadius: 10, cursor: "pointer", fontWeight: "bold"
        }}>
        🔄 Restart Game
      </button>
    </div>
  );
}