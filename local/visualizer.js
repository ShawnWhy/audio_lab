function main(){
    // console.log("loaded");
    // const canvas = document.getElementById("MyCanvass");
    // const ctx = canvas.getContext('2d');
    // canvas.width=window.innerWidth;
    // canvas.height= window.innerHeight;
    
}

class Bar{
    constructor(){

    }

    update(){

    }

    draw(){

    }
}

function animation(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //generate audio samples from microphone
    //animate bars based on microphone data;
    console.log("animate")
    requestAnimationFrame(animate);
}

function printVoice(){
    console.log("ouches")
}

class PathObject {
  constructor(path, fill) {
    this.path = new Path2D(path);
    this.fill = fill;
  }

  draw(ctx) {
    ctx.fillStyle = this.fill;
    ctx.fill(this.path);
  }
}

const cakeUrls = [
  "./images/cupcake1.svg",
  "./images/cupcake2.svg",
  "./images/cupcake3.svg",
  "./images/cookie.svg",
  "./images/waffle.svg",
];
const sliceUrls = [
  "./images/slice1.svg",
  "./images/slice2.svg",
  "./images/slice3.svg",
  "./images/slice4.svg",
  "./images/slice5.svg",
  "./images/slice6.svg",
  "./images/slice7.svg",
  "./images/slice8.svg",
];

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// const path1 = new PathObject("M 100 100 L 200 100 L 200 200 L 100 200 Z", 'blue');
// const path2 = new PathObject("M 300 100 L 400 100 L 400 200 L 300 200 Z", 'red');

// const pathObjects = [path1, path2];


// // To draw all path objects on the canvas:
// pathObjects.forEach(pathObject => {
//   pathObject.draw(ctx);
// })

function shootLargeCake(){
   if ($("#house").hasClass("houseSqueeze")) {
          $("#house").removeClass("houseSqueeze");
   } else {
          $("#house").addClass("houseSqueeze");
        }
   let newCake = $("<div>");

   newCake.addClass("largeCake");
   // console.log(cakeUrls[rand2]);
   // newCake.css("animation", "smallCake" + rand1 + " 1s both");
   newCake.css("top", "-100px");
   $("#house").append(newCake);
   setTimeout(() => {
     var fullCakes = $(".largeCake");
     $(fullCakes).each((index, value) => {
       // console.log($(value).css("top").split("px")[0]);

       $(value).remove();
     })
       for (let i = 0; i < 8; i++) {
        console.log( "shooting slice",i)
        let newCakeContainer = $("<div>");
        let slice = $("<div>");
        let rand1 = Math.floor(Math.random() * 6);
        slice.addClass("smallCakeInner");
        slice.addClass("smallCake" + rand1);
        newCakeContainer.addClass("smallCake");

        newCakeContainer.css("animation", "smallCake" + rand1 + " 1s both");
        newCakeContainer.css("top", "-200px");
        slice.css("background-image", "url(" + sliceUrls[i] + ")");
        $(newCakeContainer).append(slice);
        $("#house").append(newCakeContainer);

       }
    
   }, 400);
}


function shootSmallCake(number) {
  console.log("shoot small cake", number);
  if (number) {
    if ($("#house").hasClass("houseSqueeze")) {
      $("#house").removeClass("houseSqueeze");
    } else {
      $("#house").addClass("houseSqueeze");
    }
    let rand1 = Math.floor(Math.random() * 6);
    let rand2 = Math.floor(Math.random() * cakeUrls.length);
    if (number >= 150000) {
      let newCake = $("<div>");
      newCake.addClass("largeCake");
      // console.log(cakeUrls[rand2]);
      // newCake.css("animation", "smallCake" + rand1 + " 1s both");
      newCake.css("top", -1 * (number - 100) + "px");
      $("#house").append(newCake);
      setTimeout(() => {
        var fullCakes = $(".largeCake");
        $(fullCakes).each((index, value) => {
          // console.log($(value).css("top").split("px")[0]);

          // $(value).remove();
          for (i = 0; i <= 8; i++) {}
        });
      }, 1500);
    } else {
      let newCakeContainer = $("<div>");
      let newCake = $("<div>");
      newCake.addClass("smallCakeInner");

      newCake.addClass("smallCake" + rand1);

      newCakeContainer.addClass("smallCake");
      newCakeContainer.css("animation", "smallCake" + rand1 + " 1s both");
      newCakeContainer.css("top", -1 * (number - 100) + "px");
      newCake.css("background-image", "url(" + cakeUrls[rand2] + ")");
      // newCake.css("background-image", "url(" + sliceUrls[rand2] + ")");

      $(newCakeContainer).append(newCake);
      $("#house").append(newCakeContainer);
    }
  }
}

setInterval(() => {
  var fallenCake = $(".smallCake");
  $(fallenCake).each((index, value) => {
    // console.log($(value).css("top").split("px")[0]);
    console.log($(value).offset().top);
    if ($(value).offset().top > 600) {
      // $(value).remove();
    }
  });
}, 500);