nose_x = 0;
nose_y = 0;

function preload(){
    big_lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-20;
        nose_y = results[0].pose.nose.y+10;
        console.log("Nose x = "+nose_x);
        console.log("Nose y = "+nose_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(big_lips,nose_x,nose_y,40,40);
}

function takeSnapshot(){
    save('myFilterImg.png');
}