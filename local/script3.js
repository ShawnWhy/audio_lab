//audio api
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audio1 = document.getElementById("audio1");

const context = new AudioContext({
 latencyHint: "interactive",
  sampleRate: 44100,
  sinkId: "bb04fea9a8318c96de0bd...", // truncated for brevity
}
);
// let audio1 = new Audio('./luteplay.mp3');
      // audio1.play();

  // const audio1 = document.getElementById("audio2");
  // audio1.src = "luteplay.mp3";
let audioSource = context.createMediaElementSource(audio1);
audioSource.connect(context.destination)

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2");

 
// const container = document.getElementById("container");
// const canvas = document.getElementById("canvas1");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight

// const visualContext = canvas.getContext('2d');

// let analyzer;
function shootcake(){
  
}
function animate() {
  x=0
  // console.log("animate");
  // visualContext.clearRect(0, 0, canvas.width, canvas.height);
  analyzer.getByteFrequencyData(dataArray);
  for (let i = 0; i < bufferLength; i++) {
    if(dataArray[i]>80){
    barHeight = dataArray[i];
    
    visualContext.fillStyle = "black";
    visualContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    }
    x += barWidth;
  
  }
  requestAnimationFrame(animate);
}

container.addEventListener("click", ()=>{

console.log("play")
  audio1.play();

  audioSource = context.createMediaElementSource(audio1);
  audioSource.connect(context.destination)
  console.log(audioSource)
  analyzer = context.createAnalyser();
  audioSource.connect(analyzer);
  analyzer.connect(context.destination);
  analyzer.fftSize = 64;
  console.log(analyzer)
  console.log(audioSource)
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = canvas.width / bufferLength;
  let barHeight;
  let x = 0;
  animate();

})






