var context = new AudioContext();
console.log(context.sampleRate);
// → 44100
console.log(context.destination.channelCount);
// → 2

const buffer = context.createBuffer(
  1,
  context.sampleRate*1,
  context.sampleRate
)

const channelData = buffer.getChannelData(0)

for(let i=0; i<buffer.length; i++){
  channelData[i] = Math.random()*2 -1;
}



const primaryGainControl = context.createGain();
primaryGainControl.gain.setValueAtTime(0.05,0);

primaryGainControl.connect(context.destination)

const button = document.createElement("button")

button.innerText = "white noice";
button.addEventListener("click",(e)=>{
  const whiteNoiseBufferSource = context.createBufferSource();
  whiteNoiseBufferSource.buffer = buffer;
  whiteNoiseBufferSource.connect(primaryGainControl);

whiteNoiseBufferSource.start()


})

document.body.appendChild(button)

const snareFilter = context.createBiquadFilter();
snareFilter.type= "highpass";
snareFilter.frequency.value=2500;
snareFilter.connect(primaryGainControl);
const snareButton = document.createElement("button")
snareButton.innerText ="Snare"
snareButton.addEventListener("click",()=>{
  const whiteNoiseBufferSource = context.createBufferSource();
  whiteNoiseBufferSource.buffer = buffer;
  whiteNoiseBufferSource.connect(snareFilter);
  whiteNoiseBufferSource.start()
})

document.body.appendChild(snareButton);



// const snareFilter = context.createBiquadFilter();
// snareFilter.type = "highpass";
// snareFilter.frequency.value = 2500;

// snareFilter.connect(primaryGainControl);
// const kickButton = document.createElement("button");
// snareButton.innerText = "Kick";
// snareButton.addEventListener("click", () => {

//   const kickOscilator = context.createOscillator()
//   kickOscilator.frequency.setTargetAtTime(261.6, 0)

//   const whiteNoiseBufferSource = context.createBufferSource();
//   whiteNoiseBufferSource.buffer = buffer;
//   whiteNoiseBufferSource.connect(snareFilter);
//   whiteNoiseBufferSource.start();
// });

document.body.appendChild(snareButton);

var file = document.getElementById("docpicker")
// $("#docpicker").change((e)=>{
// // console.log($("docpicker").val())
// console.log($("#docpicker").files)

// });

file.addEventListener("change",()=>{
  console.log(file.value)
})