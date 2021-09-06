function preload() {
    
    }
    
    function setup() {
    canvas = createCanvas(640,640);
    canvas.position(120,250);
    video=createCapture(VIDEO);
    video.hide();
    }
    
    function draw() {
    image(video, 60, 120, 520, 400);

    fill(255, 219, 41);
    stroke(255, 0, 0);

    circle(600, 40, 40);
    circle(40, 600, 40);
    circle(40, 40, 40);
    circle(600, 600, 40);

    fill(0, 183, 255);
    stroke(0, 128, 0);
    
    rect(60, 30, 520,20);
    rect(590, 60, 20, 520)
    rect(60, 590, 520,20);
    rect(30, 60, 20, 520)
    }

    function take_snapshot(){
        save('You are so good looking ! 😊🤗.png');
    }