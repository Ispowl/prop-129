song1 ="";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
scoreleftWristY = "";
statusr = "";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotposes);
}

function modelLoaded(){
    console.log('POSENET IS INTIALIZED');
}

function draw(){
    image(video,0,0,600,500);

    fill('#FF0000');
    stroke('#FF0000');
    statusr = song1.isPlaying();
    if(scoreleftWristY > 0.2){
        song2.pause();
        circle(leftWristX,leftWristY,20);
     if(statusr = "false"){
         song1.play();
         document.getElementById("song").innerHTML = "Song - Peter pan song";
    }
    }
}

function play(){
    song1.play();
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        scoreleftWristY = results[0].pose.keypoints.score;
        console.log("ScoreleftWristY = "+scoreleftWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);
    }
}