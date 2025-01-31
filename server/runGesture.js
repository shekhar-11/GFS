const robot = require("@jitsi/robotjs");

const commands = {
  thumbs_up: ["W"],
  victory: ["W", "X"],
  fist: ["S"],
  right: ["W", "right"],
  left: ["W", "left"],
};

// Variable to store the current gesture command being executed
let currentCommand = null;

const runGesture = (gesture) => {
  // If the detected gesture is the same as the current command, do nothing
  if (gesture === currentCommand) {
    return;
  }

  // Release the keys of the previous gesture (if any)
  if (currentCommand && commands[currentCommand]) {
    const prevCommand = commands[currentCommand];
    prevCommand.forEach((key) => {
      robot.keyToggle(key, 'up'); // Release the key for the previous gesture
    });
    console.log(`Releasing keys for previous gesture: ${currentCommand}`);
  }

  // Check if the gesture has a corresponding command in the commands object
  if (commands[gesture]) {
    
    const command = commands[gesture];
    command.forEach((key) => {
      robot.keyToggle(key, 'down'); // Hold the key for the new gesture
    });

    // Update the current command to the new gesture
    currentCommand = gesture;
    console.log(`Executing command for gesture: ${gesture}`);
  } else {
    console.log(`No command found for gesture: ${gesture}`);
  }
};

module.exports = { runGesture };
