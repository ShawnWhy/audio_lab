//audio api
window.AudioContext = window.AudioContext || window.webkitAudioContext;

const context = new AudioContext();
let audio1 = new Audio('/luteplay.mp3');
  // const audio1 = document.getElementById("audio2");
  // audio1.src = "luteplay.mp3";
let audioSource = context.createMediaElementSource(audio1);
//     audioSource.connect(context.destination);
//     console.log(context.destination)
//     console.log(audioSource)
      // audio1.play();

  
// audio1.src = './luteplay.mp3'
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2");

  // const audio1 = document.getElementById("audio1");
  // audio1.src = "./luteplay.mp3";

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

const visualContext = canvas.getContext('2d');

let analyzer;

container. addEventListener("click", ()=>{
// const audio1 = document.getElementById("audio1");
// audio1.src = "./luteplay.mp3";
  // audio1.currentTime=0;
console.log("play")
  audio1.play();

  // setTimeout(() => {
  //   audio1.pause()
  // }, 2500);
  // audioSource = context.createMediaElementSource(audio1);
  // audioSource.connect(context.destination)
  // console.log(audioSource)
  // analyzer = context.createAnalyser();
  // audioSource.connect(analyzer);
  // analyzer.connect(context.destination);
  // analyzer.fftSize = 64;
  // console.log(analyzer)
  // console.log(audioSource)
  // const bufferLength = analyzer.frequencyBinCount;
  // const dataArray = new Uint8Array(bufferLength);

  // const barWidth = canvas.width / bufferLength;
  // let barHeight;
  // let x = 0;

  function animate() {
    x=0
    // console.log("animate");
    visualContext.clearRect(0, 0, canvas.width, canvas.height);
    analyzer.getByteFrequencyData(dataArray);
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      visualContext.fillStyle = "white";
      visualContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth;
    }
    requestAnimationFrame(animate);
  }
  // animate();
});





// console.log(context.sampleRate);
// // → 44100
// console.log(context.destination.channelCount);
// // → 2
// const buffer = context.createBuffer(
//   1,
//   context.sampleRate * 1,
//   context.sampleRate
// );

// const channelData = buffer.getChannelData(0);


// const button1 = document.getElementById("button1")
// const button2 = document.getElementById("button2");

// let audio1 = new Audio();
// audio1.src = './luteplay.mp3'
// // let Audio1 = document.getElementById("audio");
button1.addEventListener("click", ()=>{

  console.log("click")
  audio1.play()
  audio1.addEventListener("playing", ()=>{
    console.log('audio 1 start playing');

  })
  audio1.addEventListener("ended",()=>{
    console.log("audio1 ended")
  })

})

button2.addEventListener("click", ()=>{
audio1.pause()
// playSound()
})

// function playSound(){
//   // audio1.play();
//   const oscillator = context.createOscillator()
//   oscillator.connect(context.destination)
//   oscillator.type = 'sine'
//   oscillator.start();
//   setTimeout(() => {
//     oscillator.stop()
//   }, 1000);

// }





// …

// const analyser = audioCtx.createAnalyser();
// analyser.fftSize = 2048;

// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// analyser.getByteTimeDomainData(dataArray);

// source = audioCtx.createMediaElementSource(audio1)
// // Connect the source to be analysed
// source.play(0)
// source.connect(analyser);

// Get a canvas defined with ID "oscilloscope"
// const canvas = document.getElementById("oscilloscope");
// const canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source



// function draw() {
//   requestAnimationFrame(draw);

//   analyser.getByteTimeDomainData(dataArray);

//   canvasCtx.fillStyle = "rgb(200, 200, 200)";
//   canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

//   canvasCtx.lineWidth = 2;
//   canvasCtx.strokeStyle = "rgb(0, 0, 0)";

//   canvasCtx.beginPath();

//   const sliceWidth = (canvas.width * 1.0) / bufferLength;
//   let x = 0;

//   for (let i = 0; i < bufferLength; i++) {
//     const v = dataArray[i] / 128.0;
//     const y = (v * canvas.height) / 2;

//     if (i === 0) {
//       canvasCtx.moveTo(x, y);
//     } else {
//       canvasCtx.lineTo(x, y);
//     }

//     x += sliceWidth;
//   }

//   canvasCtx.lineTo(canvas.width, canvas.height / 2);
//   canvasCtx.stroke();
// }

// draw();
