class Particle {
    constructor(x, y,r) {
      var options = {
        'restitution':0.4,
       
        'density':0.1,
          
      }
      this.r=r;
      this.body = Bodies.circle(x, y,this.r, options);
      
    //this.colour= colour(random(0,255),random(0,255),random(0,255));
    
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      noStroke();
      
      //fill(this.colour);
      ellipseMode(RADIUS)
      ellipse(0, 0,this.r,this.r);
      pop();
    }
  };