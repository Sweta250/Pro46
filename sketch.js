var canvas;
var music;
var s1,s2,s3,s4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(0,580,360,30)
s1.shapeColor="pink"

s2=createSprite(295,580,200,30)
s2.shapeColor="blue"

s3=createSprite(515,580,200,30)
s3.shapeColor="red"

s4=createSprite(740,580,220,30)
s4.shapeColor="green"


    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.setVelocity(4,9)

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
 edges=createEdgeSprites()
 ball.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(s1)){
        ball.shapeColor="pink"
        ball.bounceOff(s1)
        music.play()
    }

    if(ball.isTouching(s2)){
        ball.shapeColor="blue"
        ball.bounceOff(s2)
        music.play()
    }

    if(ball.isTouching(s3)){
        ball.shapeColor="red"
        //ball.bounceOff(s3)
        ball.setVelocity(0,0)
        music.stop()
    }

    if(ball.isTouching(s4)){
        ball.shapeColor="green"
        ball.bounceOff(s4)
        music.play()
    }
}
