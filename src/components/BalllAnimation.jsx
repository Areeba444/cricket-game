import { useEffect, useRef } from "react";

export default function BallAnimation({ phase, outcome, setBallPos, onDone }) {
  const animRef = useRef(null);

  useEffect(() => {
    // 🟡 BOWLING ANIMATION
    if (phase === "bowling") {
      let progress = 0;

      function animateBall() {
        progress += 0.04;
        const x = 355;
        const y = 155 + progress * 95;

        setBallPos({ x, y });

        if (progress < 1) {
          animRef.current = requestAnimationFrame(animateBall);
        } else {
          setBallPos(null);
          onDone(); // move to batting phase
        }
      }

      animRef.current = requestAnimationFrame(animateBall);
    }

    // 🟢 SHOT BALL ANIMATION
    if (phase === "shot" && outcome !== "Wicket") {
      let p = 0;

      function flyBall() {
        p += 0.06;
        setBallPos({ x: 355 + p * 200, y: 250 - p * 80 });

        if (p < 1) {
          requestAnimationFrame(flyBall);
        } else {
          setBallPos(null);
        }
      }

      requestAnimationFrame(flyBall);
    }

    return () => cancelAnimationFrame(animRef.current);
  }, [phase]);

  return null; // no UI, only logic
}