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
// let audioSource = context.createMediaElementSource(audio1);
// audioSource.connect(context.destination)

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2");

 
const container = document.getElementById("container");
// const canvas = document.getElementById("canvas1");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight

// const visualContext = canvas.getContext('2d');
const cakeUrls = [
  "./images/cupcake1.svg",
  "./images/cupcake2.svg",
  "./images/cupcake3.svg",
  "./images/cookie.svg",
  "./images/waffle.svg",
];

// let analyzer;
function shootSmallCake(number){
  if(number){
  if($("#house").hasClass("houseSqueeze")){
    $("#house").removeClass("houseSqueeze")
  }else{
    $("#house").addClass("houseSqueeze");
  }
  let rand1 = Math.floor(Math.random()*6)
  let rand2 = Math.floor(Math.random()*cakeUrls.length)
if(number>=230){
      let newCake = $("<div>");
      newCake.addClass("largeCake");
      // console.log(cakeUrls[rand2]);
      // newCake.css("animation", "smallCake" + rand1 + " 1s both");
      newCake.css("top", -1 * (number-100) + "px");
      $("#house").append(newCake);
      setTimeout(() => {
        var fullCakes = $(".largeCake")
        $(fullCakes).each((index, value) => {
          // console.log($(value).css("top").split("px")[0]);
            
            $(value).remove();
            for(i=0; i<=8;i++){

            }
          
        });

      }, 1500);


}else{
  let newCakeContainer = $("<div>")
    let newCake = $("<div>");
    newCake.addClass("smallCakeInner");

    newCake.addClass("smallCake" + rand1);

    newCakeContainer.addClass("smallCake");
    newCakeContainer.css("animation", "smallCake" + rand1 + " 1s both");
    newCakeContainer.css("top", -1 * (number - 100) + "px");
    newCake.css("background-image", "url(" + cakeUrls[rand2] + ")");
    $(newCakeContainer).append(newCake);
    $("#house").append(newCakeContainer);

}



  }
}

setInterval(() => {
  var fallenCake = $(".smallCake")
  $(fallenCake).each((index, value)=>{
    // console.log($(value).css("top").split("px")[0]);
    console.log($(value).offset().top);
    if ($(value).offset().top>600) {
      $(value).remove();
    }

  })
}, 200);
container.addEventListener("click", ()=>{
// shootSmallCake()
console.log("play")
  audio1.play();

  audioSource = context.createMediaElementSource(audio1);
  audioSource.connect(context.destination)
  // console.log(audioSource)
  analyzer = context.createAnalyser();
  audioSource.connect(analyzer);
  analyzer.connect(context.destination);
  analyzer.fftSize = 64;
  console.log(analyzer)
  console.log(audioSource)
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // const barWidth = canvas.width / bufferLength;
  // let barHeight;
  // let x = 0;
  function animate() {
    x = 0;
    analyzer.getByteFrequencyData(dataArray);
    let temp = 0;
    // for (let i = 0; i < 20 ; i++) {
      
      if (dataArray[1] > 100) {
        console.log("number")
        console.log(dataArray[1])
        shootSmallCake(dataArray[1]);
      // }
 
      // requestAnimationFrame(animate);
    }
  }

       setInterval(() => {
         animate();
       }, 500);
  // animate();

})






