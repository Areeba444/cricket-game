# 🏏 2D Cricket Web Application

A simple and interactive **2D Cricket Batting Game** built using **React, JavaScript, and HTML Canvas**.
The game simulates real cricket gameplay using a **probability-based power bar system** instead of random outcomes.

---

## 🎯 Features

* 🎮 Single-player batting gameplay
* ⚡ Two batting styles:

  * **Aggressive** (high risk, high reward)
  * **Defensive** (low risk, consistent scoring)
* 🎯 **Probability-Based Power Bar**

  * Outcomes depend on slider position (no randomness)
* ⚾ Smooth **bowling and batting animations**
* 📊 Live **scoreboard updates**
* 💬 Dynamic commentary system
* 🔁 Restart game functionality
* 🎨 2D cricket ground rendered using Canvas

---

## 🧠 Game Logic

* Total Overs: **2 (12 balls)**
* Total Wickets: **2**
* Each ball follows this flow:

  1. Player clicks **Bowl**
  2. Ball animation plays
  3. Power bar appears
  4. Player clicks to play shot
  5. Outcome determined by slider position
  6. Scoreboard updates

👉 The game ends when:

* All balls are played, OR
* All wickets are lost

---

## 📊 Probability System

Each batting style has predefined probabilities for outcomes:

| Outcome | Aggressive | Defensive |
| ------- | ---------- | --------- |
| Wicket  | 0.40       | 0.15      |
| 0       | 0.10       | 0.30      |
| 1       | 0.10       | 0.25      |
| 2       | 0.10       | 0.15      |
| 3       | 0.05       | 0.05      |
| 4       | 0.10       | 0.07      |
| 6       | 0.15       | 0.03      |

✔ The power bar visually represents these probabilities
✔ Slider position determines outcome — **no randomness used**

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6)
* HTML5 Canvas
* CSS3

---

## 📁 Project Structure

```
src/
├── components/
├── data/
├── hooks/
├── App.jsx
```

---

## 🚀 How to Run the Project

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## 📌 Notes

* This project was developed as part of a **Web Programming Assignment**
* Focus was on:

  * UI design
  * Event handling
  * Animation
  * Probability-based logic

---

✨ *A fun blend of cricket and web development!*
