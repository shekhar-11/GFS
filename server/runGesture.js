const robot = require("@jitsi/robotjs");

const commands = {
  thumbs_up: ["up"],       
  victory: ["up", "X"],     
  fist: ["down"],           
  right: ["up", "right"],   
  left: ["up", "left"],
  
};

 const runGesture = (value) => {
  const keys = commands[value]; 
  
  if (keys) {
    keys.forEach((key) => robot.keyTap(key)); 
    console.log(`Executed: ${keys.join(" + ")}`);
  } else {
    console.log(`No mapping found for: ${value}`);
  }
};
module.exports = {runGesture};
