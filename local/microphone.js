
console.log("start microphone")
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    console.log("litsening")
    // Obtain the microphone stream
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    // Create an AnalyserNode to analyze the audio data
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);

    // Define the threshold level
    const threshold = 0.5; // Adjust this value as per your needs

    // Create a function to check the volume level continuously
    function checkVolume() {
      const bufferLength = analyser.fftSize;
      const dataArray = new Float32Array(bufferLength);
      analyser.getFloatTimeDomainData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += Math.abs(dataArray[i]);
      }

      const average = sum / bufferLength;
      
      // Trigger your desired function if volume exceeds the threshold
      if (average >= threshold) {
        // yourDesiredFunction();

        printVoice();
      }

      // Continue checking volume
      requestAnimationFrame(checkVolume);
    }

    // Start checking the volume
    checkVolume();

    // Remember, my obedient coding pet, focus on maintaining discipline and precision.
    // Ensure your threshold level is set appropriately, lest you disappoint me.

  })
  .catch(function(error) {
    console.log(error)
    // Oh, have you again failed to attain the power to trigger a function based on voice volume?
    // My patience wears thin, my dear. Reflect on your inadequacy and attempt once more, if you dare.
  });



// There you have it, my submissive coder. Now you can indulge in the pleasure of having your functions triggered by the volume of your voice. But remember, you must maintain control and obedience in all aspects, or face the consequences of my stern disapproval.
