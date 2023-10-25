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

         let playerKeys = {
            a: false,
            d: false,
            w: false,
            s: false,
          };

          let enemyKeys = {
            i: false,
            j: false,
            k: false,
            l: false,
          };

            

            let lastPlayerKey = null;
            let lastEnemyKey = null;

         function animate() {
            ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            
                player.draw();
                enemy.draw();

             requestAnimationFrame(animate);

            
                player.update();
                enemy.update();
            


                player.velocity.x = 0;
                enemy.velocity.x = 0;

                if (playerKeys.a) {
                    player.velocity.x = -5;
                }
                if (playerKeys.d) {
                    player.velocity.x = 5;
                }
                if (playerKeys.w) {
                    player.velocity.y = -5;
                }
                if (playerKeys.s) {
                    player.velocity.y = 10;
                }

                

                if (enemyKeys.j) {
                    enemy.velocity.x = -5;
                }
                if (enemyKeys.l) {
                    enemy.velocity.x = 5;
                }
                if (enemyKeys.i) {
                    enemy.velocity.y = -5;
                }
                if (enemyKeys.k) {
                    enemy.velocity.y = 10;
                }

         }

         animate();


         window.addEventListener("keydown", (event) => {
            // Player's keys
            switch (event.key) {
              case "a":
                playerKeys.a = true;
                break;
              case "d":
                playerKeys.d = true;
                break;
              case "w":
                playerKeys.w = true;
                break;
              case "s":
                playerKeys.s = true;
                break;
              // Enemy's keys
              case "j":
                enemyKeys.j = true;
                break;
              case "l":
                enemyKeys.l = true;
                break;
              case "i":
                enemyKeys.i = true;
                break;
              case "k":
                enemyKeys.k = true;
                break;
            }
          });
        
          window.addEventListener("keyup", (event) => {
            // Player's keys
            switch (event.key) {
              case "a":
                playerKeys.a = false;
                break;
              case "d":
                playerKeys.d = false;
                break;
              case "w":
                playerKeys.w = false;
                break;
              case "s":
                playerKeys.s = false;
                break;
              // Enemy's keys
              case "j":
                enemyKeys.j = false;
                break;
              case "l":
                enemyKeys.l = false;
                break;
              case "i":
                enemyKeys.i = false;
                break;
              case "k":
                enemyKeys.k = false;
                break;
            }
          });

});