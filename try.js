const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'video',
  output: `${ __dirname }/video.h264`,
  width: 800,
  height: 1080,
  timeout: 20000, // Record for 5 seconds
  nopreview: false,
});
 
myCamera.record()
  .then((result) => {
    // Your video was captured
    console.log("Suu", result)
  })
  .catch((error) => {
     // Handle your error
     console.log("ERR", error)
  });