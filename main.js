function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
    Image(video, 0, 600, 500);

    if(scoreLeftWrist > 0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
document.getElementById("Harry Potter Theme Song").innerHTML = "Harry Potter Theme Song = " + Harry_Potter_Theme_Song;
song.setSong(Harry_Potter_Theme_Song);
}

if(scoreRightWrist > 0.2)
{
    circle(rightWristX,rightWristY,20);
    InNumberRightWristY = Number(rightWristY);
document.getElementById("Peter Pan Song").innerHTML = "Peter Pan Song = " + Peter_Pan_Song;
song.setSong(Peter_Pan_Song);
}
}

function play()
{
    song.play(0)
    song.Harry_Potter_Theme_Song(1)
    {
        song.play(0)
        song.Peter_Pan_Song(1)
    }
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNose.on('pose', gotPoses);

}

function gotPoses (results)
{
    if(results.length > 0)
    {
console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX =" + leftWristX +"leftWristY ="+ leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX +" rightWristY = "+ rightWristY);
    }
}