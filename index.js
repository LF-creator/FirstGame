document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let width = 1024;
    let height = 576;

    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(0, 0, width, height);

    const gravity = 0.2;

    class Sprite {
        constructor({postion, size, color, velocity}) {
            this.postion = postion;
            this.size = size;
            this.color = color;
            this.velocity = velocity;
            this.height = 220;

        }

        draw() {
            ctx.fillStyle = "white";
            ctx.fillRect(
                this.postion.x, 
                this.postion.y,
                100, 200
                );

            }

        update() {
            this.draw();
            this.postion.x += this.velocity.x;
            this.postion.y += this.velocity.y;

            if (this.postion.y + this.height + this.velocity.y >= canvas.height ) {
                this.velocity.y = 0;
            } else {
                this.velocity.y += gravity;


            }

            if (this.postion.x + this.velocity.x >= canvas.width) {
                
                this.velocity.x = 0;
            } else if (this.postion.x + this.velocity.x <= 0) {
                this.velocity.x = 0;
            }

        }

    }

    const player = new Sprite({ 
        postion: { 
            x: 100, 
            y: 100 
        },
         size: { 
            width: 100, 
            height: 100 
        },
          color: "white",

          velocity: {
             x: 0, 
             y: 0 
            }
         });

    player.draw();


    const enemy = new Sprite({ 
        postion: { 
        x: 700, 
        y: 100 
    },
     size: { 
        width: 100, 
        height: 100 
    },
      color: "blue",

      velocity: {
         x: 0, 
         y: 0, 
        }
     });


         enemy.draw();


         console.log(player);

         const keys = {
            a: {
                pressed: false
            },
            d: {
                pressed: false
            },
            w: {
                pressed: false
            },
            s: {
                pressed: false
            }
         }

         function animate() {
            ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            
             player.draw();
                enemy.draw();

             requestAnimationFrame(animate);

             player.update();
                enemy.update();


                player.velocity.x = 0;
                if (keys.a.pressed) {
                    player.velocity.x = -10;
                }
                if (keys.d.pressed) {
                    player.velocity.x = 10;
                }
                if (keys.w.pressed) {
                    player.velocity.y = -9;
                }
                if (keys.s.pressed) {
                    player.velocity.y = 20;
                }
         }

         animate();


         window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "d":
                    keys.d.pressed = true;
                    break;
                case "a":
                    keys.a.pressed = true;
                    break;
                case "w":
                    keys.w.pressed = true;
                    break;
                case "s":
                    keys.s.pressed = true;
                    break;

            }
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "d":
                    keys.d.pressed = false;
                    break;
                case "a":
                    keys.a.pressed = false;
                    break;
                case "w":
                    keys.w.pressed = false;
                    break;
                case "s":
                    keys.s.pressed = false;
                    break;
            }
        });

});


