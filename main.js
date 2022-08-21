song = "";

function preload() {
    song = loadSound("music.mp3");
}

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

scorerightWrist = 0;
scoreleftWrist = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function modelloaded() {
    console.log("posenet is intialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if (scorerightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);

        if (rightWristY > 0 && rightWristY <= 100) {
            document.getElementById("speed").innerHTML = "Speed- 0.5";
            song.rate(0.5);
        }

        else if (rightWristY > 100 && rightWristY <= 200) {
            document.getElementById("speed").innerHTML = "Speed- 1x";
            song.rate(1);
        }

        else if (rightWristY > 200 && rightWristY <= 300) {
            document.getElementById("speed").innerHTML = "Speed- 1.5x";
            song.rate(1.5);
        }

        else if (rightWristY > 300 && rightWristY <= 400) {
            document.getElementById("speed").innerHTML = "Speed- 2x";
            song.rate(2);
        }

        else if (rightWristY > 400) {
            document.getElementById("speed").innerHTML = "Speed- 2.5x";
            song.rate(2.5);
        }
    }



    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
    
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
    
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
    
            scoreleftWrist = results[0].pose.keypoints[9].score;
    
            scorerightWrist = results[0].pose.keypoints[10].score;
            console.log(scoreleftWrist, scorerightWrist);
    
        }
    
    
    }
    
    
    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
    
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
    
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
    
            scoreleftWrist = results[0].pose.keypoints[9].score;
    
            scorerightWrist = results[0].pose.keypoints[10].score;
            console.log(scoreleftWrist, scorerightWrist);
    
        }
    
    
    }
    
    
        
    