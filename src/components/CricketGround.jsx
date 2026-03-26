import { useRef, useEffect } from "react";

export default function CricketGround({ ballPos, showBat, lastResult }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = 700, H = 320;

    // Sky
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(0, 0, W, 120);

    // Outfield grass
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(0, 120, W, H - 120);

    // Pitch (brown strip)
    ctx.fillStyle = "#c8a96e";
    ctx.fillRect(280, 140, 140, 160);

    // Pitch crease lines
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(285, 170); ctx.lineTo(415, 170); ctx.stroke(); // popping crease
    ctx.beginPath(); ctx.moveTo(285, 270); ctx.lineTo(415, 270); ctx.stroke();

    // Stumps (3 lines)
    ctx.strokeStyle = "#f5deb3";
    ctx.lineWidth = 3;
    [348, 355, 362].forEach(x => {
      ctx.beginPath(); ctx.moveTo(x, 270); ctx.lineTo(x, 255); ctx.stroke();
    });

    // Batsman (simple stick figure)
    const bx = 340, by = 250;
    ctx.fillStyle = "#2c3e50";
    ctx.beginPath(); ctx.arc(bx, by - 30, 10, 0, Math.PI * 2); ctx.fill(); // head
    ctx.strokeStyle = "#2c3e50"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(bx, by - 20); ctx.lineTo(bx, by); ctx.stroke(); // body
    ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx - 12, by + 20); ctx.stroke(); // left leg
    ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + 8, by + 20); ctx.stroke(); // right leg
    // Bat arm
    const batAngle = showBat ? -0.8 : 0.2;
    ctx.beginPath();
    ctx.moveTo(bx, by - 15);
    ctx.lineTo(bx + Math.cos(batAngle) * 30, by - 15 + Math.sin(batAngle) * 30);
    ctx.strokeStyle = "#8B4513"; ctx.lineWidth = 6;
    ctx.shadowColor = "#8B4513";
    ctx.shadowBlur = 6; ctx.stroke();
    ctx.shadowBlur = 0;

    // Ball
    if (ballPos) {
      ctx.fillStyle = "#e74c3c";
      ctx.beginPath();
      ctx.arc(ballPos.x, ballPos.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#c0392b"; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(ballPos.x, ballPos.y, 8, 0.3, Math.PI + 0.3);
      ctx.stroke();
    }

    // Result flash
    if (lastResult) {
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(W / 2 - 80, H / 2 - 28, 160, 56);
      ctx.fillStyle = lastResult === "Wicket" ? "#e74c3c" :
                      ["4","6"].includes(lastResult) ? "#f1c40f" : "#2ecc71";
      ctx.font = "bold 32px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        lastResult === "Wicket" ? "OUT!" : `${lastResult} Run${lastResult !== "1" ? "s" : ""}`,
        W / 2, H / 2 + 10
      );
    }
  }, [ballPos, showBat, lastResult]);

  return <canvas ref={canvasRef} width={700} height={320}
    style={{ borderRadius: 10, border: "2px solid #555", display: "block" }} />;
}