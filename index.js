document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let width = 1024;
    let height = 576;

    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(0, 0, width, height);

    class Sprite {
        constructor({postion, size, color, velocity}) {
            this.postion = postion;
            this.size = size;
            this.color = color;
            this.velocity = velocity;
        }

        draw() {
            ctx.fillStyle = "red";
            ctx.fillRect(this.postion.x, this.postion.y,
                 100, 200);

            }

        update() {
            this.draw();
            this.postion.y += this.velocity.y;
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
          color: "red",

          velocity: {
             x: 2, 
             y: 2 
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
      color: "red",

      velocity: {
         x: 2, 
         y: 2 
        }
     });


         enemy.draw();


         console.log(player);

         function animate() {
            ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            
             player.draw();
                enemy.draw();

             requestAnimationFrame(animate);

             player.update();
                enemy.update();
         }

         animate();

});