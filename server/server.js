var robot = require("@jitsi/robotjs");

// Type "Hello World".
const array = ['m', 'y',' ', 'n', 'a','m', 'e',' ','i','s',' ','r','a','j'];
setTimeout(()=>{
  array.forEach((e)=>{
    robot.typeString(e)
  })
},5000)