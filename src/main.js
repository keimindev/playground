import k from "./kaplayCtx.js";

k.loadSprite("chemical-bg","graphics/chemical-bg.png");
k.loadSprite("platforms","graphics/platforms.png");
k.loadSprite("sonic","graphics/sonic.png",{
  sliceX : 8,
  sliceY : 2,
  anims:{
    run: {from: 0, to: 7, speed: 30, loop: true},
    jump: {from: 8, to: 15, speed: 100, loop:true},
  },
});
k.loadSprite("ring","graphics/ring.png",{
  sliceX : 16,
  sliceY : 1,
  anims:{
    spin: {from: 0, to: 15, speed: 30, loop: true},
  },
});
k.loadSprite("motobug","graphics/motobug.png",{
  sliceX : 5,
  sliceY : 1,
  anims:{
    run: {from: 0, to: 4, speed: 8, loop: true},
  },
});
k.loadFont("mania", "fonts/mania.ttf");

k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");
k.loadSound("city", "sounds/city.mp3");

k.scene("disclaimer", disclaimer);
k.scene("main-menu", mainMenu);
k.scene("game", game);
k.scene("gameover", gameover);

k.go("disclaimer");


