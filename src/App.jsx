
// 1. Install Dependencies D
// 2. Import dependencies D
// 3. Setup webcam and canvas D
// 4. Define references to those D
// 5. Load Handpose D 
// 6. Detect function
// 7. Drawing Utilities from tensorflow
// 8. Draw Functions

import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utilities';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // loading the handpose
  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load();
      console.log("Handpose Loaded.");

      // loop and detect hands
      setInterval(() => {
        detect(net);
      }, 100);
    };

    runHandpose();
  }, []); // Empty dependency array ensures it runs only once

  const detect = async (net) => {
    // check data availability
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {

      // get video properties
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
    
      // set the video width and height
      // forcing the video width and height just to set up the frame dimension
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // canvas w and h setup
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
    
      // make detections 
      const hand = await net.estimateHands(video);
      console.log(hand);

      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear previous drawings
      drawHand(hand, ctx);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Webcam 
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480
          }}
        />
        <canvas 
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480
          }}
        />
      </header>
    </div>
  );
}

export default App;
