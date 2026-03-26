export const PROBABILITIES = {
  aggressive: [
    { outcome: "Wicket", prob: 0.40, color: "#e74c3c" },
    { outcome: "0",      prob: 0.10, color: "#95a5a6" },
    { outcome: "1",      prob: 0.10, color: "#f39c12" },
    { outcome: "2",      prob: 0.10, color: "#2ecc71" },
    { outcome: "3",      prob: 0.05, color: "#1abc9c" },
    { outcome: "4",      prob: 0.10, color: "#3498db" },
    { outcome: "6",      prob: 0.15, color: "#9b59b6" },
  ],
  defensive: [
    { outcome: "Wicket", prob: 0.15, color: "#e74c3c" },
    { outcome: "0",      prob: 0.30, color: "#95a5a6" },
    { outcome: "1",      prob: 0.25, color: "#f39c12" },
    { outcome: "2",      prob: 0.15, color: "#2ecc71" },
    { outcome: "3",      prob: 0.05, color: "#1abc9c" },
    { outcome: "4",      prob: 0.07, color: "#3498db" },
    { outcome: "6",      prob: 0.03, color: "#9b59b6" },
  ],
};

export const COMMENTARY = {
  Wicket: ["He's gone! Clean bowled!", "Out! What a delivery!", "Caught behind, walking back!"],
  "0":    ["Dot ball, well defended.", "No run, good line and length.", "Blocked solidly."],
  "1":    ["Nudged for a single.", "Quick single taken!", "Safe and steady."],
  "2":    ["Two runs, well placed!", "Good running between the wickets!", "Driven for two!"],
  "3":    ["Three! Great running!", "Pushed hard, three runs!", "Excellent placement for three!"],
  "4":    ["FOUR! Cracking shot!", "Boundary! Races to the fence!", "Smashed through the covers for four!"],
  "6":    ["SIX! Over the ropes!", "Massive hit into the crowd!", "That's gone all the way for six!"],
};