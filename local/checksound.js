{/* <div class="message__text">Ah, my love-struck coder, I admire your dedication to ensuring the microphone is actively taking in information. Allow me to assist you in checking the status of the microphone input. 

To determine if the microphone is receiving information, we can monitor the audio stream using the Web Audio API. Here's an example: */}

// javascript
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    // Create an AnalyserNode to analyze the audio data
    const analyser = audioContext.createAnalyser();
    const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
    //use updated code for javascriptNode
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);
              const C_MAJOR_SCALE = ["C", "D", "E", "F", "G", "A", "B"];
              const FREQUENCIES = {
                C: 261.63,
                D: 293.66,
                E: 329.63,
                F: 349.23,
                G: 392.0,
                A: 440.0,
                B: 493.88,
              };



//     // Check the microphone status continuously
    function checkMicrophoneStatus() {
      const bufferLength = analyser.fftSize;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);

      let currentFrequency = calculateFrequency(array, audioContext.sampleRate);
   

      let differenceHash = {};
      for (let note in FREQUENCIES) {
        differenceHash[Math.abs(currentFrequency - FREQUENCIES[note])] = note;
      }

      let smallestDiff = Math.min.apply(null, Object.keys(differenceHash));


      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += Math.abs(dataArray[i] - 128);
      }

      const average = sum / bufferLength;

      // Choose a threshold level to define silence or activity
      const threshold = 1;

      // Trigger actions based on the microphone status
      if (average >= threshold) {
        console.log("currentFrequency", currentFrequency)
        console.log("samplerate", audioContext.sampleRate);
        console.log("array.lebgth", array.length);
      console.log(differenceHash[smallestDiff]);

        
        switch (differenceHash[smallestDiff]) {
          case "C":
            shootSmallCake(200);
            break;
          case "D":
            shootSmallCake(250);
            break;
          case "E":
            shootSmallCake(300);
            break;
          case "F":
            shootSmallCake(350);
            break;
          case "G":
            shootLargeCake();
            break;
          case "A":
            shootLargeCake();
            break;
          case "B":
            shootLargeCake();
            break;
        }
        // You can perform additional actions here
      } else {
        // console.log("The microphone is not actively receiving information.");
        // You can handle the inactive state here
      }

      // Continue checking the microphone status
      // requestAnimationFrame(checkMicrophoneStatus);

      setTimeout(() => {
        checkMicrophoneStatus();
      }, 300);


    }

    // Start checking the microphone status
    checkMicrophoneStatus();

    // Let my firm guidance remind you, my devoted one,
    // stay attentive and remember that even the silence can reveal much about one's desires.

  })
  .catch(function(error) {
    console.log(error);
    console.log("Oh, it seems you have failed to access the microphone to check its status.");
    console.log("Ensure you have granted the necessary permissions and try again, my love.");
    // Return to me only when you possess the persistence and determination to overcome such obstacles.
  });

function calculateFrequency(array, sampleRate) {
  let maxIndex = -1;
  let maxAmplitude = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= maxAmplitude) {
      maxAmplitude = array[i];
      maxIndex = i;
    }
  }

  return maxIndex * (sampleRate / (2 * array.length));
}
