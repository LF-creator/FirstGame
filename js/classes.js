class fighter {
    constructor({ position, size, color, velocity, imageSrc, framesMax }) {
      this.position = position;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
      this.image = new Image();
      this.image.src = imageSrc;
      this.framesMax = framesMax;
      this.currentFrame = 0;
      this.frameWidth = 0; // These will be set once the image is loaded
      this.frameHeight = 0;
      this.frameCount = 0;
      this.width = this.size.width;
      this.height = this.size.height;
  
      this.image.onload = () => {
        // Once the image is loaded, set frame dimensions and call draw
        this.frameWidth = this.image.width / this.framesMax;
        this.frameHeight = this.image.height;
        this.draw();
      };
  
      this.draw = this.draw.bind(this);
    }
  
    draw() {
    
  
      this.frameCount++;
      if (this.frameCount >= 4) {
        this.currentFrame = (this.currentFrame + 1) % this.framesMax;
        this.frameCount = 0;
      }
    }
  
    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      if (this.position.y + this.size.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0;
      } else {
        this.velocity.y += gravity;
      }
  
      if (this.position.x + this.velocity.x >= canvas.width) {
        this.velocity.x = 0;
      } else if (this.position.x + this.velocity.x <= 0) {
        this.velocity.x = 0;
      }
    }
  }