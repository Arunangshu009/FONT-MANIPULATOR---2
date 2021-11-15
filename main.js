x = 0;
y = 0;
draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}
function setup() { 
  video= createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(550, 500);
  canvas.position(60, 50);
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw(){
    if(draw_apple =="set")
    {
      document.getElementById("status").innerHTML= to_number +"Apples drawn";
    }
  }
  
function speak(){
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  speak_data = "System is listening please speak";
}

for(var i=1; i<= to_number; i++){
  x= Math.floor(Math.random() *700);
  y=Math.floor(Math.random() *400);
  
  image (apple, x, y, 50, 50);
}

function modelLoaded (){
  oconsole.log('PoseNet Is Initialized!');
}

function gotPoses(){
  if(result.length> 0 ){
      console.log(results)
  }
}