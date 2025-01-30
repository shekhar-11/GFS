

// gesture recognition STEPS
// Install fingerpose npm install fingerpose D
// add useState D
// import emojis and finger pose import * as fp from "fingerpose" D
// update detect function for gesture handling
// add emojis display to the screen

import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utilities';
import { useState } from 'react'

//import images
import * as fp from "fingerpose" 
import victory from "./victory.png"
import thumbs_up from "./thumbs_up.png"
import thumbs_down from "./thumbs_down.png"
import fist from './fistpng.jpg'
import palm from './palm.jpeg'
import left from './left.jpeg'
import right from './right.jpeg'
import { allGestures } from './allGestures';
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji,setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory,fist:fist,right:right,left:left };
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

        
        if(hand.length>0)
        {
          //load gestures from fingerpose
          const GE = new fp.GestureEstimator(allGestures)

          //detect gestures
          const gesture = await GE.estimate(hand[0].landmarks,8);   //8 is confident level setting to minimum
          console.log(gesture);

          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            // console.log(gesture.gestures);
  
            // const confidence = gesture.gestures.map(
            //   (prediction) => prediction.confidence
            // );
            // const maxConfidence = confidence.indexOf(
            //   Math.max.apply(null, confidence)
            // );
            // // console.log(gesture.gestures[maxConfidence].name);
            // if (gesture.gestures.length > 0) {
              const detectedGesture = gesture.gestures[0].name; // Use first detected gesture
              console.log("Detected Gesture:", detectedGesture);
              setEmoji(detectedGesture);
            } else {
              console.log("No gesture detected.");
            }


           
            
            
          }
        





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
         {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
        
      </header>
    </div>
  );
}

export default App;
