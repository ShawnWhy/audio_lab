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

container.addEventListener("click", ()=>{

console.log("play")
  audio1.play();
})






