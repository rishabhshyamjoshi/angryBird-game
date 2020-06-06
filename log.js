class Log {
    constructor(x, y, w, h) {
      const options = {
        restitution: 0.5
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      World.add(world, this.body);
      this.w = w;
      this.h = h;
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(0);
      rectMode(CENTER);
      imageMode(CENTER);
      image(woodImg1,0, 0, this.w, this.h);
      pop();
    }
  }
  