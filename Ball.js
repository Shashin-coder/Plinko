class Balls {
    constructor(x, y) {
      var options = {
     isStatic:true,
          
      }
      this.body = Bodies.circle(x, y,10, options);
      //this.width = 30;
      //this.height = 30;
     
    
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      
      noStroke();
      fill ("yellow")
      ellipseMode(RADIUS)
      ellipse(0, 0,10);
      pop();
    }
  };