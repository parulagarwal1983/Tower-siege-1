class Box5{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.01,
          'friction':2.0,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x,pos.y, this.width, this.height);
      }
    }