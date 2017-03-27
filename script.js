function setup(){
    createCanvas(600,400);
    background(186,212,255);
}

function draw(){
    flower(550,450);
    flower(500,300);
    flower(450,250);
    flower(300,200);
    flower(350,150);
    flower(200,100);
    
    if(mouseIsPressed){
        flower(mouseX,mouseY);
    } 
}

function flower(x,y){
     //stem
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    //petals
    noStroke();
    fill(2,82,255);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
    ellipse(x-10,y-10,35,35);
    ellipse(x-10,y+10,35,35);
    
    //bulb
    fill(255,200,0);
    ellipse(x,y,25,25);
}


    
