const robot = require("@jitsi/robotjs");

const commands = {
  thumbs_up: ["up"],       
  victory: ["up", "X"],     
  fist: ["down"],           
  right: ["up", "right"],   
  left: ["up", "left"],
};

let lastGesture = null;  // Store the last gesture sent
// let timeout = null; // Track the timeout

// Function to execute the gesture command
const runGesture = (value) => {
  const keys = commands[value];  // Get the keys for the gesture

  if (keys && value !== lastGesture) {
    lastGesture = value;  // Update the last gesture sent

    // Clear the previous timeout if gesture changes
   
    // Press the key(s) continuously (simulating a key press and hold)
    keys.forEach((key) => {
      robot.keyToggle(key,"down");
      console.log(`Pressed key: ${key}`);
      setTimeout(()=>{
        robot.keyToggle(key,"up");
      },1500 )
    });

    

    
}
};


module.exports = {runGesture}; 
