export default function Scoreboard({ runs, wickets, ballsLeft, totalBalls, totalWickets }) {
  const ballsBowled = totalBalls - ballsLeft;
  const overs = Math.floor(ballsBowled / 6);
  const balls = ballsBowled % 6;

  return (
    <div style={{
      background: "#1a1a2e", border: "2px solid #f39c12",
      borderRadius: 10, padding: "12px 24px", color: "#fff",
      display: "flex", gap: 32, alignItems: "center",
      fontFamily: "monospace", fontSize: 18
    }}>
      <div>🏏 <span style={{ color: "#f39c12", fontWeight: "bold", fontSize: 24 }}>{runs}</span> runs</div>
      <div>❌ <span style={{ color: "#e74c3c" }}>{wickets}</span>/{totalWickets} wkts</div>
      <div>🔵 Overs: <span style={{ color: "#2ecc71" }}>{overs}.{balls}</span> / 2.0</div>
      <div>⚾ Balls left: <span style={{ color: "#3498db" }}>{ballsLeft}</span></div>
    </div>
  );
}