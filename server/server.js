const express = require("express");
const cors = require("cors");
const {runGesture} = require('./runGesture');
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend requests

app.post("/gesture", (req, res) => {
  console.log("Received Gesture:", req.body.gesture);
  
  runGesture(req.body.gesture);
  res.status(200).json({ message: "Gesture received successfully" });

});

app.listen(5000, () => console.log("Server running on port 5000"));




































































// var robot = require("@jitsi/robotjs");

// setTimeout(() => {
//   let i = 0;
//   let interval = setInterval(() => {
//     robot.keyTap("down"); // Press the Down key
//     i++;
//     if (i >= 20) clearInterval(interval); // Stop after 20 presses
//   }, 3000); // 3 seconds delay between each key press
// }, 10000); // Initial delay of 10 seconds
