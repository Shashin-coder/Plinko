
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
    var plinkos=[];
    var divisions=[];
    var divisionHeight=300;

var engine, world;




function setup(){
    var canvas = createCanvas(480,800);
   engine = Engine.create();
    world = engine.world;
    ground=new Ground(240,790,480,20);
    division1=new Divisions(5,650,10,300)
    division2=new Divisions(5+80,650,10,300)
    division3=new Divisions(5+80+80,650,10,300)
    division4=new Divisions(5+80+80+80,650,10,300)
    division5=new Divisions(5+(80*4),650,10,300)
    division6=new Divisions(5+(80*5),650,10,300)
    division7=new Divisions(5+(80*5+70),650,10,300)
}


function draw(){
    background(150);
    Engine.update(engine);
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();
    ground.display();
    if(frameCount%60===0){
        particles.push(new Particle(random(220,260),10,10))
    }   
    for(var j = 0;j < particles.length;j++){
        particles[j].display();
    }
    for( var k = 50;k <=width;k=k+50){
        plinkos.push(new Balls(k,75,"red"))
       
    }   
    for(var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }
    for( var k = 20;k <=width-10;k=k+50){
        plinkos.push(new Balls(k,175,"red"))
       
    }   
    for(var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }
    for( var k = 50;k <=width;k=k+50){
        plinkos.push(new Balls(k,275,"red"))
       
    }   
    for(var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }
    for( var k = 20;k <=width-10;k=k+50){
        plinkos.push(new Balls(k,375,"red"))
       
    }   
    for(var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }






}

