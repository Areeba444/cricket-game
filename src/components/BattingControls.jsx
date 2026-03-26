export default function BattingControls({ style, setStyle, onBowl, phase }) {
  const canSelect = phase === "idle" || phase === "result";
  const canBowl   = phase === "idle" || phase === "result";

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 12 }}>
      <span style={{ color: "#fff", fontWeight: "bold" }}>Style:</span>
      {["aggressive", "defensive"].map(s => (
        <button key={s} onClick={() => canSelect && setStyle(s)}
          style={{
            padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
            fontWeight: "bold", fontSize: 15, textTransform: "capitalize",
            background: style === s ? (s === "aggressive" ? "#e74c3c" : "#2ecc71") : "#555",
            color: "#fff", opacity: canSelect ? 1 : 0.6,
            boxShadow: style === s ? "0 0 10px rgba(255,255,255,0.4)" : "none"
          }}>
          {s === "aggressive" ? "⚡ Aggressive" : "🛡️ Defensive"}
        </button>
      ))}
      <button onClick={canBowl ? onBowl : undefined}
        disabled={!canBowl}
        style={{
          padding: "10px 28px", borderRadius: 8, border: "none",
          background: canBowl ? "#3498db" : "#555",
          color: "#fff", fontWeight: "bold", fontSize: 15,
          cursor: canBowl ? "pointer" : "not-allowed"
        }}>
        🏏 Bowl Next Ball
      </button>
    </div>
  );
}