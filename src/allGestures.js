import * as fp from "fingerpose";
const fingersList  = [fp.Finger.Thumb,fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky];

// Define the custom "thumbs down" gesture
export const FistGesture = new fp.GestureDescription('fist');
// thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurlCurl);
// FistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0); // Increased confidence
// FistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.7); // Increased confidence
// FistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.7); // Increased confidence

// Curl other fingers fully for "thumbs down" gesture
for (let finger of fingersList) {
  FistGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0); // Full curl only
  FistGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9); // Full curl only
}

export const LeftGesture = new fp.GestureDescription('left');
for (let finger of fingersList) {
  LeftGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
LeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0); 
LeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

export const RightGesture = new fp.GestureDescription('right');
for (let finger of fingersList) {
  RightGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
RightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0); 
RightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);

// Export all the gestures you want to use
export const allGestures = [
  fp.Gestures.VictoryGesture,
  fp.Gestures.ThumbsUpGesture,
  FistGesture, // Include custom gesture here
  RightGesture,
  LeftGesture
];

