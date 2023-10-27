document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let width = 1024;
  let height = 576;

  canvas.width = width;
  canvas.height = height;
  

  ctx.fillRect(0, 0, width, height);

  const gravity = 0.5;
  

  class Sprite {
    constructor({ postion, size, color, velocity }) {
      this.postion = postion;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
      this.height = 220;
      this.attackBox = {
        postion: this.postion,
        width: 200,
        height: 50,
      };

      this.color = color;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.postion.x, this.postion.y, 100, 200);

      ctx.fillRect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height);
    }

    update() {
      this.draw();
      this.postion.x += this.velocity.x;
      this.postion.y += this.velocity.y;

      if (this.postion.y + this.height + this.velocity.y >= canvas.height) {
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
    postion: { x: 100, y: 100 },
    size: { width: 100, height: 100 },
    color: "white",
    velocity: { x: 0, y: 0 },
  });

  player.draw();

  const enemy = new Sprite({
    postion: { x: 700, y: 100 },
    size: { width: 100, height: 100 },
    color: "blue",
    velocity: { x: 0, y: 0 },
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

    // Collision detection

    // Player's attack

    if (
      player.attackBox.postion.x + player.attackBox.width >= enemy.postion.x &&
      player.attackBox.postion.x <= enemy.postion.x + enemy.size.width &&
      player.attackBox.postion.y + player.attackBox.height >= enemy.postion.y &&
      player.attackBox.postion.y <= enemy.postion.y + enemy.size.height
    ) {
      console.log("hit");
    }

    // Enemy's attack

    if (
      enemy.attackBox.postion.x + enemy.attackBox.width >= player.postion.x &&
      enemy.attackBox.postion.x <= player.postion.x + player.size.width &&
      enemy.attackBox.postion.y + enemy.attackBox.height >= player.postion.y &&
      enemy.attackBox.postion.y <= player.postion.y + player.size.height
    ) {
      console.log("hit");
    }

    // Player's attack box

    if (playerKeys.a) {
      player.attackBox.postion.x = player.postion.x - player.attackBox.width;
      player.attackBox.postion.y = player.postion.y;
    } else if (playerKeys.d) {
      player.attackBox.postion.x = player.postion.x + player.size.width;
      player.attackBox.postion.y = player.postion.y;
    } else if (playerKeys.w) {
      player.attackBox.postion.x = player.postion.x;
      player.attackBox.postion.y = player.postion.y - player.attackBox.height;
    } else if (playerKeys.s) {
      player.attackBox.postion.x = player.postion.x;
      player.attackBox.postion.y = player.postion.y + player.size.height;
    }

    // Enemy's attack box

    if (enemyKeys.j) {
      enemy.attackBox.postion.x = enemy.postion.x - enemy.attackBox.width;
      enemy.attackBox.postion.y = enemy.postion.y;
    } else if (enemyKeys.l) {
      enemy.attackBox.postion.x = enemy.postion.x + enemy.size.width;
      enemy.attackBox.postion.y = enemy.postion.y;
    } else if (enemyKeys.i) {
      enemy.attackBox.postion.x = enemy.postion.x;
      enemy.attackBox.postion.y = enemy.postion.y - enemy.attackBox.height;
    } else if (enemyKeys.k) {
      enemy.attackBox.postion.x = enemy.postion.x;
      enemy.attackBox.postion.y = enemy.postion.y + enemy.size.height;
    } else {
      enemy.attackBox.postion.x = enemy.postion.x;
      enemy.attackBox.postion.y = enemy.postion.y;
    }

    // Player's attack box

    if (playerKeys.a) {
      player.attackBox.postion.x = player.postion.x - player.attackBox.width;
      player.attackBox.postion.y = player.postion.y;
    } else if (playerKeys.d) {
      player.attackBox.postion.x = player.postion.x + player.size.width;
      player.attackBox.postion.y = player.postion.y;
    } else if (playerKeys.w) {
      player.attackBox.postion.x = player.postion.x;
      player.attackBox.postion.y = player.postion.y - player.attackBox.height;
    } else if (playerKeys.s) {
      player.attackBox.postion.x = player.postion.x;
      player.attackBox.postion.y = player.postion.y + player.size.height;
    } else {  
      player.attackBox.postion.x = player.postion.x;
      player.attackBox.postion.y = player.postion.y;
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
