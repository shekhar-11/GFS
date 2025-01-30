const fingerJoints = {
  thumb:[0,1,2,3,4],
  index :[0,5,6,7,8],
  mid:[0,9,10,11,12],
  ring:[0,13,14,15,16],
  t:[0,17,18,19,20]
}


export const drawHand = (predictions,ctx) =>{

  if(predictions.length>0)
  {
    //loop through each predictions
    predictions.forEach((prediction) => {
      //grab landmarks : as returned in console.log()

      const landmarks = prediction.landmarks;
      //loop through and draw them

        for(let i=0;i<Object.keys(fingerJoints).length;i++)
        {
          let finger = Object.keys(fingerJoints)[i];
          for(let k = 0;k<fingerJoints[finger].length-1;k++)
          {
            const firstJoint = fingerJoints[finger][k];
            const secondJoint = fingerJoints[finger][k+1];




            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJoint][0],
              landmarks[firstJoint][1]
            )
            ctx.lineTo(
              landmarks[secondJoint][0],
              landmarks[secondJoint][1],
            )
            ctx.strokeStyle ="black";
            ctx.lineWidth =4;
            ctx.stroke();

          }
        }
      for(let i = 0;i<landmarks.length;i++)
      {
        const x = landmarks[i][0];
        const y = landmarks[i][1];

        ctx.beginPath();
        ctx.arc(x,y,8,0,3*Math.PI)

        //setLine color
        ctx.fillStyle = "grey"
        ctx.fill();
      }
    });
  }
}