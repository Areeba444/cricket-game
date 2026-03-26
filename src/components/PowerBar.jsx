import { useEffect, useRef, useState } from "react";
import { PROBABILITIES } from "../data/probabilities";

export default function PowerBar({ style, onShot, active }) {
  const segments = PROBABILITIES[style];
  const barWidth = 600;
  const [sliderPos, setSliderPos] = useState(0); // 0 to 1
  const animRef = useRef(null);
  const posRef  = useRef(0);
  const dirRef  = useRef(1); // 1 = right, -1 = left
  const speed   = 0.008; // tune this for difficulty

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animRef.current);
      return;
    }
    function animate() {
      posRef.current += speed * dirRef.current;
      if (posRef.current >= 1) { posRef.current = 1; dirRef.current = -1; }
      if (posRef.current <= 0) { posRef.current = 0; dirRef.current =  1; }
      setSliderPos(posRef.current);
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [active]);

  function handleClick() {
    if (!active) return;
    cancelAnimationFrame(animRef.current);
    // Determine outcome from slider position
    let cumulative = 0;
    let outcome = segments[segments.length - 1].outcome;
    for (const seg of segments) {
      cumulative += seg.prob;
      if (posRef.current <= cumulative) { outcome = seg.outcome; break; }
    }
    onShot(outcome);
  }

  // Build segment widths
  let cum = 0;
  const rects = segments.map(seg => {
    const start = cum;
    cum += seg.prob;
    return { ...seg, start, end: cum };
  });

  return (
    <div style={{ userSelect: "none", marginTop: 16 }}>
      <p style={{ color: "#fff", marginBottom: 4, fontWeight: "bold" }}>
        🎯 Click to play your shot!
      </p>
      <div
        onClick={handleClick}
        style={{
          position: "relative", width: barWidth, height: 44,
          borderRadius: 8, overflow: "hidden", cursor: active ? "pointer" : "default",
          border: "2px solid #fff", boxShadow: "0 0 12px rgba(255,255,255,0.3)"
        }}
      >
        {/* Segments */}
        {rects.map(seg => (
          <div key={seg.outcome} style={{
            position: "absolute",
            left: seg.start * barWidth,
            width: seg.prob * barWidth,
            height: "100%",
            background: seg.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: "bold", fontSize: 13,
            borderRight: "1px solid rgba(255,255,255,0.3)"
          }}>
            {seg.prob >= 0.07 ? seg.outcome : ""}
          </div>
        ))}
        {/* Slider */}
        <div style={{
          position: "absolute",
          left: sliderPos * barWidth - 3,
          top: 0, width: 6, height: "100%",
          background: "#fff",
          boxShadow: "0 0 8px #fff",
          transition: "none",
          pointerEvents: "none"
        }} />
      </div>
      {/* Probability scale */}
      <div style={{ position: "relative", width: barWidth, height: 18, marginTop: 2 }}>
        {rects.map(seg => (
          <span key={seg.outcome} style={{
            position: "absolute", left: seg.start * barWidth,
            fontSize: 10, color: "#aaa"
          }}>{seg.start.toFixed(2)}</span>
        ))}
        <span style={{ position: "absolute", left: barWidth - 24, fontSize: 10, color: "#aaa" }}>1.00</span>
      </div>
    </div>
  );
}