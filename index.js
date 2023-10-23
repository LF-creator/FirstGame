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
    }

    const player = new Sprite({ x: 50, y: 100 },
         { width: 100, height: 100 }, "red");

    player.draw();


    const enemy = new Sprite({ x: 900, y: 100 },
         { width: 100, height: 100 }, "blue");

         enemy.draw();


         console.log(player);

         function animate() {
             ctx.clearRect(0, 0, width, height);
             player.draw();
             enemy.draw();
             requestAnimationFrame(animate);
             console.log("go");
         }

         animate();

});