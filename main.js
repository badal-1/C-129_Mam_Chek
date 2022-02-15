song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
score = 0;
function preload(){
song = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('Pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet Is Initialised');
}
function gotPoses(results) { 
if(results.length > 0) {
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
leftWristX = results[0].pose.leftWrist.x; 
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
} 
}
function draw(){
image(video, 0,0, 600, 500);

fill('orange');
stroke(orange);
circle(leftWristX, leftWristY, 20);

InNumberLeftWristY = Number(leftWristY);
remove_decimals = floor(InNumberLeftWristY);;
leftWristY_divide_1000 = remove_decimals/1000;
volume = leftWristY_divide_1000 *2;
document.getElementById("volume").innerHTML = "Volume = " + volume;
song.setVolume(volume);
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}