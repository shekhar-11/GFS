import * as fp from "fingerpose";
const fingersList  = [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky];


export const WaveGesture = new fp.GestureDescription('fist');

// Curl other fingers fully for "thumbs down" gesture
for (let finger of fingersList) {
  WaveGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0); 
  // WaveGesture.addCurl(finger, fp.FingerCurl.NoCurl, 0.9);
  WaveGesture.addDirection(finger,fp.FingerDirection.VerticalUp,1.0) 
}

export const LeftGesture = new fp.GestureDescription('left');
for (let finger of fingersList) {
  LeftGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
  LeftGesture.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
}
// LeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0); 

export const RightGesture = new fp.GestureDescription('right');
for (let finger of fingersList) {
  RightGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
  RightGesture.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
}
// RightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0); 


export const allGestures = [
  fp.Gestures.VictoryGesture,
  fp.Gestures.ThumbsUpGesture,
  WaveGesture, 
  RightGesture,
  LeftGesture
];

