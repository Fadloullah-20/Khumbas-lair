    //Variables
            
        //Game State
state = 1;
        //Player Position
let myXPos = 50;
let myYPos = 55;

//Enemy Positions
    let enemyXPos = 200;
    let enemyYPos = 25;
    let enemy2XPos = 225;
    let enemy2YPos = 450;
let enemy3XPos = 250;
let enemy3YPos = 25;
let enemy4XPos = 275;
let enemy4YPos = 450;
let enemy5XPos = 375;
let enemy5YPos = 225;
let enemy6XPos = 100;
let enemy6YPos = 250;
let enemy7XPos = 375;
let enemy7YPos = 275;
let enemy8XPos = 100;
let enemy8YPos = 300;
let enemy9XPos = 375;
let enemy9YPos = 325;
let enemy10XPos = 100;
let enemy10YPos = 350;
        //Enemy Movement
let direction = 1;
let direction2 = 1;
let direction3 = 1;
let direction4 = 1;
let direction5 = 1;
let direction6 = 1;
let direction7 = 1;
let direction8 = 1;
let direction9 = 1;
let direction10 = 1;
        //Damsel Position
let damselXPos = 475
let damselYPos = 425
        //Barrier Position
let lineXPos = 0
let lineX2Pos = 500

        // C-setup
let c1x=225;
let c1y=250;
let c2x=245;
let c2y=250;
let c3x=255;
let c3y=280;
let c4x=225;
let c4y=325;

        // Walls 
let w1x =-25;
let w1y=100;
let w2x=0;
let w2y=0;
let w3x=325;
let w3y=100;
let w4x=150;
let w4y=125;
let w5x=325;
let w5y=125;
let w6x=75;
let w6y=200;
let w7x=325;
let w7y=200;
let w8x=50;
let w8y=200;
let w9x=425;
let w9y=200;
let w10x=50;
let w10y=375;
let w11x=350;
let w11y=375;
let w12x=125;
let w12y=400;
let w13x=150;
let w13y=475;
let w14x=225;
let w14y=250;
let w15x=350;
let w15y=387.5;
    //Assets
function preload(){
    mainCharacter = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/knight_f_idle_anim_f3.png")
    wall1 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_mid.png")
    wall2 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_top_mid.png")
    wall3 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_corner_right.png")
    wall4 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_corner_top_right.png")
    wall5 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_side_mid_right.png")
    wall6 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_side_mid_left.png")
    wall7 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_inner_corner_mid_left.png")
    wall8 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/wall_top_left.png")
    floor = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/floor_1.png")
    spike = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/floor_spikes_anim_f3.png")
    enemy1 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/orc_shaman_idle_anim_f0.png")
    enemy2 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/necromancer_idle_anim_f1.png")
    enemy3 = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/orc_warrior_idle_anim_f3.png")
    damsel = loadImage("0x72_DungeonTilesetII_v1.3.1/0x72_DungeonTilesetII_v1.3.1/frames/elf_m_idle_anim_f1.png")
    title = loadImage("Other_Assets/tittle.png")
    start = loadImage("Other_Assets/modes.png")
    gameOver = loadImage("Other_Assets/gameover.png")
    restart = loadImage("Other_Assets/restart.png")
    win = loadImage("Other_Assets/win.png")
    exit = loadImage("Other_Assets/exit.png")
    
    
}
      
    //Setup
function setup() {
        createCanvas(500, 500);
        background(0);
     noStroke();
}

        //GAME BEGINS HERE
function draw(){
   
       /* if (state==3 ){
            music1.play();
        }*/
        /*
        if(state==0){
            textSize(15);
            textFont('Minecraft);
            text(hello,100,100);


        }
*/

        //Stage 1 (Tittle screen)
        if (state == 1) {
        background(0);
        textFont('Minecraft');
        textSize(30);       
        image(title,95,50,300,200);
        image(start,150,250,200,200);
        /*fill(255,0,255);
        text('STORY',200,475);*/
        }

        
        //Stage 2 (The Game Level)
    if(state == 2){    //state 2 start
       
        //Backround
        background(0);
            //floor layer #1
        image(floor,0,25,25,25)
        image(floor,25,25,25,25)
        image(floor,50,25,25,25)
        image(floor,75,25,25,25)
        image(floor,100,25,25,25)
        image(floor,125,25,25,25)
        image(floor,150,25,25,25)
        image(floor,175,25,25,25)
        image(floor,200,25,25,25)
        image(floor,225,25,25,25)
        image(floor,250,25,25,25)
        image(floor,275,25,25,25)
        image(floor,300,25,25,25)
        image(floor,325,25,25,25)
        image(floor,350,25,25,25)
        image(floor,375,25,25,25)
        image(floor,400,25,25,25)
        image(floor,425,25,25,25)
        image(floor,450,25,25,25)
        image(floor,475,25,25,25)
            
            //floor layer #2
        image(floor,0,50,25,25)
        image(floor,25,50,25,25)
        image(floor,50,50,25,25)
        image(floor,75,50,25,25)
        image(floor,100,50,25,25)
        image(floor,125,50,25,25)
        image(floor,150,50,25,25)
        image(floor,175,50,25,25)
        image(floor,200,50,25,25)
        image(floor,225,50,25,25)
        image(floor,250,50,25,25)
        image(floor,275,50,25,25)
        image(floor,300,50,25,25)
        image(floor,325,50,25,25)
        image(floor,350,50,25,25)
        image(floor,375,50,25,25)
        image(floor,400,50,25,25)
        image(floor,425,50,25,25)
        image(floor,450,50,25,25)
        image(floor,475,50,25,25)
            //floor layer #3
        image(floor,0,75,25,25)
        image(floor,25,75,25,25)
        image(floor,50,75,25,25)
        image(floor,75,75,25,25)
        image(floor,100,75,25,25)
        image(floor,125,75,25,25)
        image(floor,150,75,25,25)
        image(floor,175,75,25,25)
        image(floor,200,75,25,25)
        image(floor,225,75,25,25)
        image(floor,250,75,25,25)
        image(floor,275,75,25,25)
        image(floor,300,75,25,25)
        image(floor,325,75,25,25)
        image(floor,350,75,25,25)
        image(floor,375,75,25,25)
        image(floor,400,75,25,25)
        image(floor,425,75,25,25)
        image(floor,450,75,25,25)
        image(floor,475,75,25,25)

        image(floor,175,100,25,25)
        image(floor,200,100,25,25)
        image(floor,225,100,25,25)
        image(floor,250,100,25,25)
        image(floor,275,100,25,25)
        image(floor,300,100,25,25)

        image(floor,175,125,25,25)
        image(floor,200,125,25,25)
        image(floor,225,125,25,25)
        image(floor,250,125,25,25)
        image(floor,275,125,25,25)
        image(floor,300,125,25,25)

        image(floor,175,150,25,25)
        image(floor,200,150,25,25)
        image(floor,225,150,25,25)
        image(floor,250,150,25,25)
        image(floor,275,150,25,25)
        image(floor,300,150,25,25)

        image(floor,175,175,25,25)
        image(floor,200,175,25,25)
        image(floor,225,175,25,25)
        image(floor,250,175,25,25)
        image(floor,275,175,25,25)
        image(floor,300,175,25,25)

        image(floor,175,200,25,25)
        image(floor,200,200,25,25)
        image(floor,225,200,25,25)
        image(floor,250,200,25,25)
        image(floor,275,200,25,25)
        image(floor,300,200,25,25)

        image(floor,75,225,25,25)
        image(floor,100,225,25,25)
        image(floor,125,225,25,25)
        image(floor,150,225,25,25)
        image(floor,175,225,25,25)
        image(floor,200,225,25,25)
        image(floor,225,225,25,25)
        image(floor,250,225,25,25)
        image(floor,275,225,25,25)
        image(floor,300,225,25,25)
        image(floor,325,225,25,25)
        image(floor,350,225,25,25)
        image(floor,375,225,25,25)
        image(floor,400,225,25,25)

        image(floor,75,250,25,25)
        image(floor,100,250,25,25)
        image(floor,125,250,25,25)
        image(floor,150,250,25,25)
        image(floor,175,250,25,25)
        image(floor,200,250,25,25)
        image(floor,275,250,25,25)
        image(floor,300,250,25,25)
        image(floor,325,250,25,25)
        image(floor,350,250,25,25)
        image(floor,375,250,25,25)
        image(floor,400,250,25,25)
        
        image(floor,75,275,25,25)
        image(floor,100,275,25,25)
        image(floor,125,275,25,25)
        image(floor,150,275,25,25)
        image(floor,175,275,25,25)
        image(floor,200,275,25,25)
        image(floor,275,275,25,25)
        image(floor,300,275,25,25)
        image(floor,325,275,25,25)
        image(floor,350,275,25,25)
        image(floor,375,275,25,25)
        image(floor,400,275,25,25)

        image(floor,75,300,25,25)
        image(floor,100,300,25,25)
        image(floor,125,300,25,25)
        image(floor,150,300,25,25)
        image(floor,175,300,25,25)
        image(floor,200,300,25,25)
        image(floor,275,300,25,25)
        image(floor,300,300,25,25)
        image(floor,325,300,25,25)
        image(floor,350,300,25,25)
        image(floor,375,300,25,25)
        image(floor,400,300,25,25)
        
        image(floor,75,325,25,25)
        image(floor,100,325,25,25)
        image(floor,125,325,25,25)
        image(floor,150,325,25,25)
        image(floor,175,325,25,25)
        image(floor,200,325,25,25)
        image(floor,275,325,25,25)
        image(floor,300,325,25,25)
        image(floor,325,325,25,25)
        image(floor,350,325,25,25)
        image(floor,375,325,25,25)
        image(floor,400,325,25,25)

        image(floor,75,350,25,25)
        image(floor,100,350,25,25)
        image(floor,125,350,25,25)
        image(floor,150,350,25,25)
        image(floor,175,350,25,25)
        image(floor,200,350,25,25)
        image(floor,225,350,25,25)
        image(floor,250,350,25,25)
        image(floor,275,350,25,25)
        image(floor,300,350,25,25)
        image(floor,325,350,25,25)
        image(floor,350,350,25,25)
        image(floor,375,350,25,25)
        image(floor,400,350,25,25)

        image(floor,150,375,25,25)
        image(floor,175,375,25,25)
        image(floor,200,375,25,25)
        image(floor,225,375,25,25)
        image(floor,250,375,25,25)
        image(floor,275,375,25,25)
        image(floor,300,375,25,25)
        image(floor,325,375,25,25)

        image(floor,150,400,25,25)
        image(floor,175,400,25,25)
        image(floor,200,400,25,25)
        image(floor,225,400,25,25)
        image(floor,250,400,25,25)
        image(floor,275,400,25,25)
        image(floor,300,400,25,25)
        image(floor,325,400,25,25)
        image(floor,350,400,25,25)
        image(floor,375,400,25,25)
        image(floor,400,400,25,25)
        image(floor,425,400,25,25)
        image(floor,450,400,25,25)
        image(floor,475,400,25,25)

        image(floor,150,425,25,25)
        image(floor,175,425,25,25)
        image(floor,200,425,25,25)
        image(floor,225,425,25,25)
        image(floor,250,425,25,25)
        image(floor,275,425,25,25)
        image(floor,300,425,25,25)
        image(floor,325,425,25,25)
        image(floor,350,425,25,25)
        image(floor,375,425,25,25)
        image(floor,400,425,25,25)
        image(floor,425,425,25,25)
        image(floor,450,425,25,25)
        image(floor,475,425,25,25)

        image(floor,150,450,25,25)
        image(floor,175,450,25,25)
        image(floor,200,450,25,25)
        image(floor,225,450,25,25)
        image(floor,250,450,25,25)
        image(floor,275,450,25,25)
        image(floor,300,450,25,25)
        image(floor,325,450,25,25)
        image(floor,350,450,25,25)
        image(floor,375,450,25,25)
        image(floor,400,450,25,25)
        image(floor,425,450,25,25)
        image(floor,450,450,25,25)
        image(floor,475,450,25,25)




        

        
        //Creating the Character
        image(mainCharacter, myXPos, myYPos, 25, 25);
        
        //Creating the Enemy
        fill(0,255,0);
        image(enemy1, enemyXPos, enemyYPos, 20, 20);
        image(enemy1, enemy2XPos, enemy2YPos, 20, 20);
        image(enemy2, enemy3XPos, enemy3YPos, 20, 20);
        image(enemy1,enemy4XPos, enemy4YPos, 25, 20);
        image(enemy3,enemy5XPos, enemy5YPos, 20, 20);
        image(enemy2,enemy6XPos, enemy6YPos, 20, 20);
        image(enemy3,enemy7XPos, enemy7YPos, 20, 20);
        image(enemy1,enemy8XPos, enemy8YPos, 20, 20);
        image(enemy2,enemy9XPos, enemy9YPos, 20, 20);
        image(enemy2,enemy10XPos, enemy10YPos, 20, 20);

        //Creating the Damsel
        fill(0,255,255);
        image(damsel, damselXPos, damselYPos, 16, 24); 

        //Center 
        fill(89,24,35)
        //c1
        rect(c1x,c1y,20,75)
        //c2
        rect(c2x,c2y, 30,30);
        //c3
        rect(c3x,c3y,20,70);
        //c4
        rect(c4x,c4y,30,25);

    
        
        //Creating walls
            //wall #1
            fill(0);
       //fill(89,24,35)
        rect(w1x,w1y, 200, 25)
            //wall #2
       
        rect(w2x,w2y, 500, 25);
            //wall #3
       
        rect(w3x, w3y, 200, 25)
            //wall #4
        
        rect(w4x, w4y, 25, 75)
            //wall #5
       
        rect(w5x, w5y, 25, 75)
            //wall #6
      
        rect(w6x, w6y, 100, 25)
            //wall #7
       
        rect(w7x, w7y, 100, 25)
            //wall #8
       
        rect(w8x, w8y, 25, 175)
            //wall #9
    
        rect(w9x, w9y, 25, 175)
            //wall #10
        rect(w10x, w10y, 100, 25)
            //wall #11
        rect(w11x, w11y, 200, 12.5)
            //wall #12
        rect(w12x,w12y,25,100)
            //wall #13
        rect(w13x,w13y,350,25)
            //wall #14
        rect(w14x,w14y,50,100);
            //wall #15
        rect(w15x,w15y,200,12.5);
        

        //drawn walls
        //wall section #1
        image(wall1, 0, 100, 25, 25)
        image(wall2, 0, 75, 25, 25)
        image(wall1, 25, 100, 25, 25)
        image(wall2, 25, 75, 25, 25)
        image(wall1, 50, 100, 25, 25)
        image(wall2, 50, 75, 25, 25)
        image(wall1, 75, 100, 25, 25)
        image(wall2, 75, 75, 25, 25)
        image(wall1, 100, 100, 25, 25)
        image(wall2, 100, 75, 25, 25)
        image(wall1, 125, 100, 25, 25)
        image(wall2, 125, 75, 25, 25)
        image(wall3, 150, 100, 25, 25)
        image(wall4, 150, 75, 25, 25)
        //wall section #2
        image(wall1, 0, 0, 25, 25)
        image(wall2, 0, -20, 25, 25)
        image(wall1, 25, 0, 25, 25)
        image(wall2, 25, -20, 25, 25)
        image(wall1, 50, 0, 25, 25)
        image(wall2, 50, -20, 25, 25)
        image(wall1, 75, 0, 25, 25)
        image(wall2, 75, -20, 25, 25)
        image(wall1, 100, 0, 25, 25)
        image(wall2, 100, -20, 25, 25)
        image(wall1, 125, 0, 25, 25)
        image(wall2, 125, -20, 25, 25)
        image(wall1, 150, 0, 25, 25)
        image(wall2, 150, -20, 25, 25)
        image(wall1, 175, 0, 25, 25)
        image(wall2, 175, -20, 25, 25)
        image(wall1, 200, 0, 25, 25)
        image(wall2, 200, -20, 25, 25)
        image(wall1, 225, 0, 25, 25)
        image(wall2, 225, -20, 25, 25)
        image(wall1, 250, 0, 25, 25)
        image(wall2, 250, -20, 25, 25)
        image(wall1, 275, 0, 25, 25)
        image(wall2, 275, -20, 25, 25)
        image(wall1, 300, 0, 25, 25)
        image(wall2, 300, -20, 25, 25)
        image(wall1, 325, 0, 25, 25)
        image(wall2, 325, -20, 25, 25)
        image(wall1, 350, 0, 25, 25)
        image(wall2, 350, -20, 25, 25)
        image(wall1, 375, 0, 25, 25)
        image(wall2, 375, -20, 25, 25)
        image(wall1, 400, 0, 25, 25)
        image(wall2, 400, -20, 25, 25)
        image(wall1, 425, 0, 25, 25)
        image(wall2, 425, -20, 25, 25)
        image(wall1, 450, 0, 25, 25)
        image(wall2, 450, -20, 25, 25)
        image(wall1, 475, 0, 25, 25)
        image(wall2, 475, -20, 25, 25)

        //wall section #3
        image(wall1, 350, 100, 25, 25)
        image(wall2, 350, 75, 25, 25)
        image(wall1, 375, 100, 25, 25)
        image(wall2, 375, 75, 25, 25)
        image(wall1, 400, 100, 25, 25)
        image(wall2, 400, 75, 25, 25)
        image(wall1, 425, 100, 25, 25)
        image(wall2, 425, 75, 25, 25)
        image(wall1, 450, 100, 25, 25)
        image(wall2, 450, 75, 25, 25)
        image(wall1, 475, 100, 25, 25)
        image(wall2, 475, 75, 25, 25)
        image(wall8, 325, 75, 25, 25)
        image(wall7, 325, 100, 25, 25)

        //wall section #4
        image(wall6, 150, 125, 25, 25)
        image(wall6, 150, 150, 25, 25)
        image(wall6, 150, 175, 25, 25)

        //wall section #5
        image(wall5, 325, 125, 25, 25)
        image(wall5, 325, 150, 25, 25)
        image(wall5, 325, 175, 25, 25)
        
        //wall section #6
        image(wall1, 75, 200, 25, 25)
        image(wall2, 75, 175, 25, 25)
        image(wall1, 100, 200, 25, 25)
        image(wall2, 100, 175, 25, 25)
        image(wall1, 125, 200, 25, 25)
        image(wall2, 125, 175, 25, 25)
        image(wall1, 150, 200, 25, 25)
        image(wall2, 150, 175, 25, 25)

         //wall section #7
        image(wall1, 325, 200, 25, 25)
        image(wall2, 325, 175, 25, 25)
        image(wall1, 350, 200, 25, 25)
        image(wall2, 350, 175, 25, 25)
        image(wall1, 375, 200, 25, 25)
        image(wall2, 375, 175, 25, 25)
        image(wall1, 400, 200, 25, 25)
        image(wall2, 400, 175, 25, 25)

          //wall section #8
        image(wall6, 50, 195, 25, 30)
        image(wall6, 50, 225, 25, 25)
        image(wall6, 50, 250, 25, 25)
        image(wall6, 50, 275, 25, 25)
        image(wall6, 50, 300, 25, 25)
        image(wall6, 50, 325, 25, 25)
        image(wall6, 50, 350, 25, 25)
        //image(wall6, 50, 350, 25, 25)

        //wall section #9
        image(wall5, 425, 195, 25, 25)
        image(wall5, 425, 200, 25, 25)
        image(wall5, 425, 225, 25, 25)
        image(wall5, 425, 250, 25, 25)
        image(wall5, 425, 275, 25, 25)
        image(wall5, 425, 300, 25, 25)
        image(wall5, 425, 325, 25, 25)
        image(wall5, 425, 350, 25, 25)

        //wall section #10
        image(wall1, 68.5, 375, 27, 25)
        image(wall2, 70, 350, 25, 25)
        image(wall1, 95, 375, 25, 25)
        image(wall2, 95, 350, 25, 25)
        image(wall1, 120, 375, 25, 25)
        image(wall2, 120, 350, 28, 25)

        //wall section #11
        image(wall1, 350, 375, 25, 25)
        image(wall2, 350, 350, 25, 25)
        image(wall1, 375, 375, 25, 25)
        image(wall2, 375, 350, 25, 25)
        image(wall1, 400, 375, 25, 25)
        image(wall2, 400, 350, 25, 25)
        image(wall1, 425, 375, 25, 25)
        image(wall2, 425, 350, 25, 25)
        image(wall1, 450, 375, 25, 25)
        image(wall2, 450, 350, 25, 25)
        image(wall1, 475, 375, 25, 25)
        image(wall2, 475, 350, 25, 25)

        //wall section #12
        image(wall6, 125, 375, 25, 25)
        image(wall6, 125, 400, 25, 25)
        image(wall6, 125, 425, 25, 25)
        image(wall6, 125, 450, 25, 25)
        
        //wall section #13
        image(wall1, 150, 475, 25, 25)
        image(wall2, 150, 450, 25, 25)
        image(wall1, 175, 475, 25, 25)
        image(wall2, 175, 450, 25, 25)
        image(wall1, 200, 475, 25, 25)
        image(wall2, 200, 450, 25, 25)
        image(wall1, 225, 475, 25, 25)
        image(wall2, 225, 450, 25, 25)
        image(wall1, 250, 475, 25, 25)
        image(wall2, 250, 450, 25, 25)
        image(wall1, 275, 475, 25, 25)
        image(wall2, 275, 450, 25, 25)
        image(wall1, 300, 475, 25, 25)
        image(wall2, 300, 450, 25, 25)
        image(wall1, 325, 475, 25, 25)
        image(wall2, 325, 450, 25, 25)
        image(wall1, 350, 475, 25, 25)
        image(wall2, 350, 450, 25, 25)
        image(wall1, 375, 475, 25, 25)
        image(wall2, 375, 450, 25, 25)
        image(wall1, 400, 475, 25, 25)
        image(wall2, 400, 450, 25, 25)
        image(wall1, 425, 475, 25, 25)
        image(wall2, 425, 450, 25, 25)
        image(wall1, 450, 475, 25, 25)
        image(wall2, 450, 450, 25, 25)
        image(wall1, 475, 475, 25, 25)
        image(wall2, 475, 450, 25, 25)
        image(wall1, 143, 475, 25, 25)

        //spike trap
        image(spike,250,250,25,25)
        image(spike,250,275,25,25)
        image(spike,250,300,25,25)
        image(spike,250,325,25,25)
        image(spike,225,250,25,25)
        image(spike,225,275,25,25)
        image(spike,225,300,25,25)
        image(spike,225,325,25,25)
        
        //Character Edges
        let myLeft = myXPos;
        let myRight = myXPos + 16;
        let myTop = myYPos;
        let myBottom = myYPos + 28;

        //Enemy Edges
        let enemyLeft = enemyXPos;
        let enemyRight = enemyXPos + 16;
        let enemyTop = enemyYPos;
        let enemyBottom = enemyYPos + 20;
        
        let enemy2Left = enemy2XPos;
        let enemy2Right = enemy2XPos + 16;
        let enemy2Top = enemy2YPos;
        let enemy2Bottom = enemy2YPos + 20;
       
        let enemy3Left = enemy3XPos;
        let enemy3Right = enemy3XPos + 16;
        let enemy3Top = enemy3YPos;
        let enemy3Bottom = enemy3YPos + 20;
       
        let enemy4Left = enemy4XPos;
        let enemy4Right = enemy4XPos + 16;
        let enemy4Top = enemy4YPos;
        let enemy4Bottom = enemy4YPos + 20;
       
        let enemy5Left = enemy5XPos;
        let enemy5Right = enemy5XPos + 16;
        let enemy5Top = enemy5YPos;
        let enemy5Bottom = enemy5YPos + 20;
        
        let enemy6Left = enemy6XPos;
        let enemy6Right = enemy6XPos + 16;
        let enemy6Top = enemy6YPos;
        let enemy6Bottom = enemy6YPos + 20;
       
        let enemy7Left = enemy7XPos;
        let enemy7Right = enemy7XPos + 16;
        let enemy7Top = enemy7YPos;
        let enemy7Bottom = enemy7YPos + 20;

        let enemy8Left = enemy8XPos;
        let enemy8Right = enemy8XPos + 16;
        let enemy8Top = enemy8YPos;
        let enemy8Bottom = enemy8YPos + 20;

        let enemy9Left = enemy9XPos;
        let enemy9Right = enemy9XPos + 16;
        let enemy9Top = enemy9YPos;
        let enemy9Bottom = enemy9YPos + 20;

        let enemy10Left = enemy10XPos;
        let enemy10Right = enemy10XPos + 16;
        let enemy10Top = enemy10YPos;
        let enemy10Bottom = enemy10YPos + 20;

        //Damsel Edges
        let damselLeft = damselXPos;
        let damselRight = damselXPos + 16;
        let damselTop = damselYPos;
        let damselBottom = damselYPos + 20;

        //C1
        let c1Left = c1x-0;
        let c1Right = c1x + 20;
        let c1Top = c1y-0;
        let c1Bottom = c1y + 75;

        let c2Left = c2x;
        let c2Right = c2x + 30;
        let c2Top = c2y;
        let c2Bottom = c2y + 30;

        let c3Left = c3x;
        let c3Right = c3x + 20;
        let c3Top = c3y;
        let c3Bottom = c3y + 70;

        let c4Left = c4x;
        let c4Right = c4x + 30;
        let c4Top = c4y;
        let c4Bottom = c4y + 25;
        
        let w1Left = w1x;
        let w1Right = w1x + 200;
        let w1Top = w1y;
        let w1Bottom = w1y + 25;
        
        let w3Left = w3x;
        let w3Right = w3x + 200;
        let w3Top = w3y;
        let w3Bottom = w3y + 25;

        let w4Left = w4x;
        let w4Right = w4x + 25;
        let w4Top = w4y;
        let w4Bottom = w4y + 75;
         
        let w5Left = w5x;
        let w5Right = w5x + 25;
        let w5Top = w5y;
        let w5Bottom = w5y + 75;
         
        let w6Left = w6x;
        let w6Right = w6x + 100;
        let w6Top = w6y;
        let w6Bottom = w6y + 25;

        let w7Left = w7x;
        let w7Right = w7x + 100;
        let w7Top = w7y;
        let w7Bottom = w7y + 25;

        let w8Left = w8x;
        let w8Right = w8x + 25;
        let w8Top = w8y;
        let w8Bottom = w8y + 175;

         let w9Left = w9x;
        let w9Right = w9x + 25;
        let w9Top = w9y;
        let w9Bottom = w9y + 175;

        let w10Left = w10x;
        let w10Right = w10x + 100;
        let w10Top = w10y;
        let w10Bottom = w10y + 25;

         let w11Left = w11x;
        let w11Right = w11x + 200;
        let w11Top = w11y;
        let w11Bottom = w11y + 12.5;
         
        let w12Left = w12x;
        let w12Right = w12x + 25;
        let w12Top = w12y;
        let w12Bottom = w12y + 100;
        
         let w13Left = w13x;
        let w13Right = w13x + 350;
        let w13Top = w13y;
        let w13Bottom = w13y + 25;

        let w15Left = w15x;
        let w15Right = w15x + 200;
        let w15Top = w15y;
        let w15Bottom = w15y + 12.5;

        //enemy movement
        
        enemyYPos += 1.5 * direction;
            if(enemyYPos < 25 || enemyYPos > 450){
                direction *= -1
            }
        enemy2YPos += 1.5 * direction2;
            if(enemy2YPos < 350 || enemy2YPos > 450){
                direction2 *= -1
        }
        enemy3YPos += 1.5 * direction3;
        if(enemy3YPos < 25 || enemy3YPos > 225){
            direction3 *= -1
    }
        enemy4YPos += 1.5 * direction4;
        if(enemy4YPos < 25 || enemy4YPos > 450){
            direction4 *= -1
}
        enemy5XPos += 1.5 * direction5;
        if(enemy5XPos < 75 || enemy5XPos > 400){
            direction5 *= -1
}
        enemy6XPos += 1.5 * direction6;
        if(enemy6XPos < 75 || enemy6XPos > 200){
            direction6 *= -1
}
        enemy7XPos += 1.5 * direction7;
        if(enemy7XPos < 275 || enemy7XPos > 400){
            direction7 *= -1
}
        enemy8XPos += 1.5 * direction8;
        if(enemy8XPos < 75 || enemy8XPos > 200){
            direction8 *= -1
}
        enemy9XPos += 1.5 * direction9;
        if(enemy9XPos < 275 || enemy9XPos > 400){
            direction9 *= -1
}
        enemy10XPos += 1.5 * direction10;
        if(enemy10XPos < 75 || enemy10XPos > 400){
            direction10 *= -1
}
if (myXPos > 475) {
    myXPos -= 3
}
if (myXPos < 0) {
    myXPos += 3
}
 

        //Detecting Enemy Player Collision
        if(enemyRight < myLeft || myRight < enemyLeft || myTop > enemyBottom || enemyTop > myBottom) {

        }
            else{
                state = 3      
        }
        
        if(enemy2Right < myLeft || myRight < enemy2Left || myTop > enemy2Bottom || enemy2Top > myBottom) {

        }
            else{
                state = 3      
        }
        
        if(enemy3Right < myLeft || myRight < enemy3Left || myTop > enemy3Bottom || enemy3Top > myBottom) {

        }
            else{
                state = 3      
        }
        
        if(enemy4Right < myLeft || myRight < enemy4Left || myTop > enemy4Bottom || enemy4Top > myBottom) {

        }
            else{
                state = 3      
        }

        if(enemy5Right < myLeft || myRight < enemy5Left || myTop > enemy5Bottom || enemy5Top > myBottom) {

        }
            else{
                state = 3      
        }
        
        if(enemy6Right < myLeft || myRight < enemy6Left || myTop > enemy6Bottom || enemy6Top > myBottom) {

        }
            else{
                state = 3      
        }
        
        if(enemy7Right < myLeft || myRight < enemy7Left || myTop > enemy7Bottom || enemy7Top > myBottom) {

        }
            else{
                state = 3      
        }

        if(enemy8Right < myLeft || myRight < enemy8Left || myTop > enemy8Bottom || enemy8Top > myBottom) {

        }
            else{
                state = 3      
        }

        if(enemy9Right < myLeft || myRight < enemy9Left || myTop > enemy9Bottom || enemy9Top > myBottom) {

        }
            else{
                state = 3      
        }

        if(enemy10Right < myLeft || myRight < enemy10Left || myTop > enemy10Bottom || enemy10Top > myBottom) {

        }
            else{
                state = 3      
        }


        //Detecting Damsel Player Collision
        if(damselRight < myLeft || myRight < damselLeft || myTop > damselBottom || damselTop > myBottom){
            
        }
            else{
                state = 4
            }
        //Detecting Wall Player Collision
        if(myTop > 25){
            
        }
            else{
                myYPos +=3
            }

             //C1 Collision
        if(c1Right < myLeft || myRight < c1Left || myTop > c1Bottom || c1Top > myBottom) {

        }
            else{
                myXPos -=3;
                myYPos -=3   
              
            } 
        if(c2Right < myLeft || myRight < c2Left || myTop > c2Bottom || c2Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                   
                }      
        if(c3Right < myLeft || myRight < c3Left || myTop > c3Bottom || c3Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        } 
        if(c4Right < myLeft || myRight < c4Left || myTop > c4Bottom || c4Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        } 
        if(w1Right < myLeft || myRight < w1Left || myTop > w1Bottom || w1Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
        
        if(w3Right < myLeft || myRight < w3Left || myTop > w3Bottom || w3Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        
        if(w4Right < myLeft || myRight < w4Left || myTop > w4Bottom || w4Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w5Right < myLeft || myRight < w5Left || myTop > w5Bottom || w5Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        if(w6Right < myLeft || myRight < w6Left || myTop > w6Bottom || w6Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w7Right < myLeft || myRight < w7Left || myTop > w7Bottom || w7Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w8Right < myLeft || myRight < w8Left || myTop > w8Bottom || w8Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w9Right < myLeft || myRight < w9Left || myTop > w9Bottom || w9Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w10Right < myLeft || myRight < w10Left || myTop > w10Bottom || w10Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        if(w11Right < myLeft || myRight < w11Left || myTop > w11Bottom || w11Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        if(w12Right < myLeft || myRight < w12Left || myTop > w12Bottom || w12Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w13Right < myLeft || myRight < w13Left || myTop > w13Bottom || w13Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
       if(w15Right < myLeft || myRight < w15Left || myTop > w15Bottom || w15Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        
        
        
        
        
         

        //Player Movement
        if (keyIsDown(LEFT_ARROW)) {
            myXPos -= 3;
    }
    
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos += 3;
    }
    
        if (keyIsDown(UP_ARROW)) {
            myYPos -= 3;
    }
    
         if (keyIsDown(DOWN_ARROW)) {
            myYPos += 3;
    }

}


    //state 2 end
     
        

    //state 5 
    if(state == 5) {    //state 2 start
       
        //Backround
        background(0);
        if (myXPos > 475) {
            myXPos -= 3
        }
        if (myXPos < 0) {
            myXPos += 3
        }
            //floor layer #1
        image(floor,0,25,25,25)
        image(floor,25,25,25,25)
        image(floor,50,25,25,25)
        image(floor,75,25,25,25)
        image(floor,100,25,25,25)
        image(floor,125,25,25,25)
        image(floor,150,25,25,25)
        image(floor,175,25,25,25)
        image(floor,200,25,25,25)
        image(floor,225,25,25,25)
        image(floor,250,25,25,25)
        image(floor,275,25,25,25)
        image(floor,300,25,25,25)
        image(floor,325,25,25,25)
        image(floor,350,25,25,25)
        image(floor,375,25,25,25)
        image(floor,400,25,25,25)
        image(floor,425,25,25,25)
        image(floor,450,25,25,25)
        image(floor,475,25,25,25)
            
            //floor layer #2
        image(floor,0,50,25,25)
        image(floor,25,50,25,25)
        image(floor,50,50,25,25)
        image(floor,75,50,25,25)
        image(floor,100,50,25,25)
        image(floor,125,50,25,25)
        image(floor,150,50,25,25)
        image(floor,175,50,25,25)
        image(floor,200,50,25,25)
        image(floor,225,50,25,25)
        image(floor,250,50,25,25)
        image(floor,275,50,25,25)
        image(floor,300,50,25,25)
        image(floor,325,50,25,25)
        image(floor,350,50,25,25)
        image(floor,375,50,25,25)
        image(floor,400,50,25,25)
        image(floor,425,50,25,25)
        image(floor,450,50,25,25)
        image(floor,475,50,25,25)
            //floor layer #3
        image(floor,0,75,25,25)
        image(floor,25,75,25,25)
        image(floor,50,75,25,25)
        image(floor,75,75,25,25)
        image(floor,100,75,25,25)
        image(floor,125,75,25,25)
        image(floor,150,75,25,25)
        image(floor,175,75,25,25)
        image(floor,200,75,25,25)
        image(floor,225,75,25,25)
        image(floor,250,75,25,25)
        image(floor,275,75,25,25)
        image(floor,300,75,25,25)
        image(floor,325,75,25,25)
        image(floor,350,75,25,25)
        image(floor,375,75,25,25)
        image(floor,400,75,25,25)
        image(floor,425,75,25,25)
        image(floor,450,75,25,25)
        image(floor,475,75,25,25)

        image(floor,175,100,25,25)
        image(floor,200,100,25,25)
        image(floor,225,100,25,25)
        image(floor,250,100,25,25)
        image(floor,275,100,25,25)
        image(floor,300,100,25,25)

        image(floor,175,125,25,25)
        image(floor,200,125,25,25)
        image(floor,225,125,25,25)
        image(floor,250,125,25,25)
        image(floor,275,125,25,25)
        image(floor,300,125,25,25)

        image(floor,175,150,25,25)
        image(floor,200,150,25,25)
        image(floor,225,150,25,25)
        image(floor,250,150,25,25)
        image(floor,275,150,25,25)
        image(floor,300,150,25,25)

        image(floor,175,175,25,25)
        image(floor,200,175,25,25)
        image(floor,225,175,25,25)
        image(floor,250,175,25,25)
        image(floor,275,175,25,25)
        image(floor,300,175,25,25)

        image(floor,175,200,25,25)
        image(floor,200,200,25,25)
        image(floor,225,200,25,25)
        image(floor,250,200,25,25)
        image(floor,275,200,25,25)
        image(floor,300,200,25,25)

        image(floor,75,225,25,25)
        image(floor,100,225,25,25)
        image(floor,125,225,25,25)
        image(floor,150,225,25,25)
        image(floor,175,225,25,25)
        image(floor,200,225,25,25)
        image(floor,225,225,25,25)
        image(floor,250,225,25,25)
        image(floor,275,225,25,25)
        image(floor,300,225,25,25)
        image(floor,325,225,25,25)
        image(floor,350,225,25,25)
        image(floor,375,225,25,25)
        image(floor,400,225,25,25)

        image(floor,75,250,25,25)
        image(floor,100,250,25,25)
        image(floor,125,250,25,25)
        image(floor,150,250,25,25)
        image(floor,175,250,25,25)
        image(floor,200,250,25,25)
        image(floor,275,250,25,25)
        image(floor,300,250,25,25)
        image(floor,325,250,25,25)
        image(floor,350,250,25,25)
        image(floor,375,250,25,25)
        image(floor,400,250,25,25)
        
        image(floor,75,275,25,25)
        image(floor,100,275,25,25)
        image(floor,125,275,25,25)
        image(floor,150,275,25,25)
        image(floor,175,275,25,25)
        image(floor,200,275,25,25)
        image(floor,275,275,25,25)
        image(floor,300,275,25,25)
        image(floor,325,275,25,25)
        image(floor,350,275,25,25)
        image(floor,375,275,25,25)
        image(floor,400,275,25,25)

        image(floor,75,300,25,25)
        image(floor,100,300,25,25)
        image(floor,125,300,25,25)
        image(floor,150,300,25,25)
        image(floor,175,300,25,25)
        image(floor,200,300,25,25)
        image(floor,275,300,25,25)
        image(floor,300,300,25,25)
        image(floor,325,300,25,25)
        image(floor,350,300,25,25)
        image(floor,375,300,25,25)
        image(floor,400,300,25,25)
        
        image(floor,75,325,25,25)
        image(floor,100,325,25,25)
        image(floor,125,325,25,25)
        image(floor,150,325,25,25)
        image(floor,175,325,25,25)
        image(floor,200,325,25,25)
        image(floor,275,325,25,25)
        image(floor,300,325,25,25)
        image(floor,325,325,25,25)
        image(floor,350,325,25,25)
        image(floor,375,325,25,25)
        image(floor,400,325,25,25)

        image(floor,75,350,25,25)
        image(floor,100,350,25,25)
        image(floor,125,350,25,25)
        image(floor,150,350,25,25)
        image(floor,175,350,25,25)
        image(floor,200,350,25,25)
        image(floor,225,350,25,25)
        image(floor,250,350,25,25)
        image(floor,275,350,25,25)
        image(floor,300,350,25,25)
        image(floor,325,350,25,25)
        image(floor,350,350,25,25)
        image(floor,375,350,25,25)
        image(floor,400,350,25,25)

        image(floor,150,375,25,25)
        image(floor,175,375,25,25)
        image(floor,200,375,25,25)
        image(floor,225,375,25,25)
        image(floor,250,375,25,25)
        image(floor,275,375,25,25)
        image(floor,300,375,25,25)
        image(floor,325,375,25,25)

        image(floor,150,400,25,25)
        image(floor,175,400,25,25)
        image(floor,200,400,25,25)
        image(floor,225,400,25,25)
        image(floor,250,400,25,25)
        image(floor,275,400,25,25)
        image(floor,300,400,25,25)
        image(floor,325,400,25,25)
        image(floor,350,400,25,25)
        image(floor,375,400,25,25)
        image(floor,400,400,25,25)
        image(floor,425,400,25,25)
        image(floor,450,400,25,25)
        image(floor,475,400,25,25)

        image(floor,150,425,25,25)
        image(floor,175,425,25,25)
        image(floor,200,425,25,25)
        image(floor,225,425,25,25)
        image(floor,250,425,25,25)
        image(floor,275,425,25,25)
        image(floor,300,425,25,25)
        image(floor,325,425,25,25)
        image(floor,350,425,25,25)
        image(floor,375,425,25,25)
        image(floor,400,425,25,25)
        image(floor,425,425,25,25)
        image(floor,450,425,25,25)
        image(floor,475,425,25,25)

        image(floor,150,450,25,25)
        image(floor,175,450,25,25)
        image(floor,200,450,25,25)
        image(floor,225,450,25,25)
        image(floor,250,450,25,25)
        image(floor,275,450,25,25)
        image(floor,300,450,25,25)
        image(floor,325,450,25,25)
        image(floor,350,450,25,25)
        image(floor,375,450,25,25)
        image(floor,400,450,25,25)
        image(floor,425,450,25,25)
        image(floor,450,450,25,25)
        image(floor,475,450,25,25)




        

        
        //Creating the Character
        image(mainCharacter, myXPos, myYPos, 25, 25);
        
        //Creating the Enemy
        fill(0,255,0);
        image(enemy1, enemyXPos, enemyYPos, 20, 20);
        image(enemy1, enemy2XPos, enemy2YPos, 20, 20);
        image(enemy2, enemy3XPos, enemy3YPos, 20, 20);
        image(enemy1,enemy4XPos, enemy4YPos, 25, 20);
        image(enemy3,enemy5XPos, enemy5YPos, 20, 20);
        image(enemy2,enemy6XPos, enemy6YPos, 20, 20);
        image(enemy3,enemy7XPos, enemy7YPos, 20, 20);
        image(enemy1,enemy8XPos, enemy8YPos, 20, 20);
        image(enemy2,enemy9XPos, enemy9YPos, 20, 20);
        image(enemy2,enemy10XPos, enemy10YPos, 20, 20);

        //Creating the Damsel
        fill(0,255,255);
        image(damsel, damselXPos, damselYPos, 16, 24); 

        //Center 
        fill(89,24,35)
        //c1
        rect(c1x,c1y,20,75)
        //c2
        rect(c2x,c2y, 30,30);
        //c3
        rect(c3x,c3y,20,70);
        //c4
        rect(c4x,c4y,30,25);

    
        
        //Creating walls
            //wall #1
            fill(0);
       //fill(89,24,35)
        rect(w1x,w1y, 200, 25)
            //wall #2
       
        rect(w2x,w2y, 500, 25);
            //wall #3
       
        rect(w3x, w3y, 200, 25)
            //wall #4
        
        rect(w4x, w4y, 25, 75)
            //wall #5
       
        rect(w5x, w5y, 25, 75)
            //wall #6
      
        rect(w6x, w6y, 100, 25)
            //wall #7
       
        rect(w7x, w7y, 100, 25)
            //wall #8
       
        rect(w8x, w8y, 25, 175)
            //wall #9
    
        rect(w9x, w9y, 25, 175)
            //wall #10
        rect(w10x, w10y, 100, 25)
            //wall #11
        rect(w11x, w11y, 200, 12.5)
            //wall #12
        rect(w12x,w12y,25,100)
            //wall #13
        rect(w13x,w13y,350,25)
            //wall #14
        rect(w14x,w14y,50,100);
            //wall #15
        rect(w15x,w15y,200,12.5);
        

        //drawn walls
        //wall section #1
        image(wall1, 0, 100, 25, 25)
        image(wall2, 0, 75, 25, 25)
        image(wall1, 25, 100, 25, 25)
        image(wall2, 25, 75, 25, 25)
        image(wall1, 50, 100, 25, 25)
        image(wall2, 50, 75, 25, 25)
        image(wall1, 75, 100, 25, 25)
        image(wall2, 75, 75, 25, 25)
        image(wall1, 100, 100, 25, 25)
        image(wall2, 100, 75, 25, 25)
        image(wall1, 125, 100, 25, 25)
        image(wall2, 125, 75, 25, 25)
        image(wall3, 150, 100, 25, 25)
        image(wall4, 150, 75, 25, 25)
        //wall section #2
        image(wall1, 0, 0, 25, 25)
        image(wall2, 0, -20, 25, 25)
        image(wall1, 25, 0, 25, 25)
        image(wall2, 25, -20, 25, 25)
        image(wall1, 50, 0, 25, 25)
        image(wall2, 50, -20, 25, 25)
        image(wall1, 75, 0, 25, 25)
        image(wall2, 75, -20, 25, 25)
        image(wall1, 100, 0, 25, 25)
        image(wall2, 100, -20, 25, 25)
        image(wall1, 125, 0, 25, 25)
        image(wall2, 125, -20, 25, 25)
        image(wall1, 150, 0, 25, 25)
        image(wall2, 150, -20, 25, 25)
        image(wall1, 175, 0, 25, 25)
        image(wall2, 175, -20, 25, 25)
        image(wall1, 200, 0, 25, 25)
        image(wall2, 200, -20, 25, 25)
        image(wall1, 225, 0, 25, 25)
        image(wall2, 225, -20, 25, 25)
        image(wall1, 250, 0, 25, 25)
        image(wall2, 250, -20, 25, 25)
        image(wall1, 275, 0, 25, 25)
        image(wall2, 275, -20, 25, 25)
        image(wall1, 300, 0, 25, 25)
        image(wall2, 300, -20, 25, 25)
        image(wall1, 325, 0, 25, 25)
        image(wall2, 325, -20, 25, 25)
        image(wall1, 350, 0, 25, 25)
        image(wall2, 350, -20, 25, 25)
        image(wall1, 375, 0, 25, 25)
        image(wall2, 375, -20, 25, 25)
        image(wall1, 400, 0, 25, 25)
        image(wall2, 400, -20, 25, 25)
        image(wall1, 425, 0, 25, 25)
        image(wall2, 425, -20, 25, 25)
        image(wall1, 450, 0, 25, 25)
        image(wall2, 450, -20, 25, 25)
        image(wall1, 475, 0, 25, 25)
        image(wall2, 475, -20, 25, 25)

        //wall section #3
        image(wall1, 350, 100, 25, 25)
        image(wall2, 350, 75, 25, 25)
        image(wall1, 375, 100, 25, 25)
        image(wall2, 375, 75, 25, 25)
        image(wall1, 400, 100, 25, 25)
        image(wall2, 400, 75, 25, 25)
        image(wall1, 425, 100, 25, 25)
        image(wall2, 425, 75, 25, 25)
        image(wall1, 450, 100, 25, 25)
        image(wall2, 450, 75, 25, 25)
        image(wall1, 475, 100, 25, 25)
        image(wall2, 475, 75, 25, 25)
        image(wall8, 325, 75, 25, 25)
        image(wall7, 325, 100, 25, 25)

        //wall section #4
        image(wall6, 150, 125, 25, 25)
        image(wall6, 150, 150, 25, 25)
        image(wall6, 150, 175, 25, 25)

        //wall section #5
        image(wall5, 325, 125, 25, 25)
        image(wall5, 325, 150, 25, 25)
        image(wall5, 325, 175, 25, 25)
        
        //wall section #6
        image(wall1, 75, 200, 25, 25)
        image(wall2, 75, 175, 25, 25)
        image(wall1, 100, 200, 25, 25)
        image(wall2, 100, 175, 25, 25)
        image(wall1, 125, 200, 25, 25)
        image(wall2, 125, 175, 25, 25)
        image(wall1, 150, 200, 25, 25)
        image(wall2, 150, 175, 25, 25)

         //wall section #7
        image(wall1, 325, 200, 25, 25)
        image(wall2, 325, 175, 25, 25)
        image(wall1, 350, 200, 25, 25)
        image(wall2, 350, 175, 25, 25)
        image(wall1, 375, 200, 25, 25)
        image(wall2, 375, 175, 25, 25)
        image(wall1, 400, 200, 25, 25)
        image(wall2, 400, 175, 25, 25)

          //wall section #8
        image(wall6, 50, 195, 25, 30)
        image(wall6, 50, 225, 25, 25)
        image(wall6, 50, 250, 25, 25)
        image(wall6, 50, 275, 25, 25)
        image(wall6, 50, 300, 25, 25)
        image(wall6, 50, 325, 25, 25)
        image(wall6, 50, 350, 25, 25)
        //image(wall6, 50, 350, 25, 25)

        //wall section #9
        image(wall5, 425, 195, 25, 25)
        image(wall5, 425, 200, 25, 25)
        image(wall5, 425, 225, 25, 25)
        image(wall5, 425, 250, 25, 25)
        image(wall5, 425, 275, 25, 25)
        image(wall5, 425, 300, 25, 25)
        image(wall5, 425, 325, 25, 25)
        image(wall5, 425, 350, 25, 25)

        //wall section #10
        image(wall1, 68.5, 375, 27, 25)
        image(wall2, 70, 350, 25, 25)
        image(wall1, 95, 375, 25, 25)
        image(wall2, 95, 350, 25, 25)
        image(wall1, 120, 375, 25, 25)
        image(wall2, 120, 350, 28, 25)

        //wall section #11
        image(wall1, 350, 375, 25, 25)
        image(wall2, 350, 350, 25, 25)
        image(wall1, 375, 375, 25, 25)
        image(wall2, 375, 350, 25, 25)
        image(wall1, 400, 375, 25, 25)
        image(wall2, 400, 350, 25, 25)
        image(wall1, 425, 375, 25, 25)
        image(wall2, 425, 350, 25, 25)
        image(wall1, 450, 375, 25, 25)
        image(wall2, 450, 350, 25, 25)
        image(wall1, 475, 375, 25, 25)
        image(wall2, 475, 350, 25, 25)

        //wall section #12
        image(wall6, 125, 375, 25, 25)
        image(wall6, 125, 400, 25, 25)
        image(wall6, 125, 425, 25, 25)
        image(wall6, 125, 450, 25, 25)
        
        //wall section #13
        image(wall1, 150, 475, 25, 25)
        image(wall2, 150, 450, 25, 25)
        image(wall1, 175, 475, 25, 25)
        image(wall2, 175, 450, 25, 25)
        image(wall1, 200, 475, 25, 25)
        image(wall2, 200, 450, 25, 25)
        image(wall1, 225, 475, 25, 25)
        image(wall2, 225, 450, 25, 25)
        image(wall1, 250, 475, 25, 25)
        image(wall2, 250, 450, 25, 25)
        image(wall1, 275, 475, 25, 25)
        image(wall2, 275, 450, 25, 25)
        image(wall1, 300, 475, 25, 25)
        image(wall2, 300, 450, 25, 25)
        image(wall1, 325, 475, 25, 25)
        image(wall2, 325, 450, 25, 25)
        image(wall1, 350, 475, 25, 25)
        image(wall2, 350, 450, 25, 25)
        image(wall1, 375, 475, 25, 25)
        image(wall2, 375, 450, 25, 25)
        image(wall1, 400, 475, 25, 25)
        image(wall2, 400, 450, 25, 25)
        image(wall1, 425, 475, 25, 25)
        image(wall2, 425, 450, 25, 25)
        image(wall1, 450, 475, 25, 25)
        image(wall2, 450, 450, 25, 25)
        image(wall1, 475, 475, 25, 25)
        image(wall2, 475, 450, 25, 25)
        image(wall1, 143, 475, 25, 25)

        //spike trap
        image(spike,250,250,25,25)
        image(spike,250,275,25,25)
        image(spike,250,300,25,25)
        image(spike,250,325,25,25)
        image(spike,225,250,25,25)
        image(spike,225,275,25,25)
        image(spike,225,300,25,25)
        image(spike,225,325,25,25)
        
        //Character Edges
        let myLeft = myXPos;
        let myRight = myXPos + 16;
        let myTop = myYPos;
        let myBottom = myYPos + 28;

        //Enemy Edges
        let enemyLeft = enemyXPos;
        let enemyRight = enemyXPos + 16;
        let enemyTop = enemyYPos;
        let enemyBottom = enemyYPos + 20;
        
        let enemy2Left = enemy2XPos;
        let enemy2Right = enemy2XPos + 16;
        let enemy2Top = enemy2YPos;
        let enemy2Bottom = enemy2YPos + 20;
       
        let enemy3Left = enemy3XPos;
        let enemy3Right = enemy3XPos + 16;
        let enemy3Top = enemy3YPos;
        let enemy3Bottom = enemy3YPos + 20;
       
        let enemy4Left = enemy4XPos;
        let enemy4Right = enemy4XPos + 16;
        let enemy4Top = enemy4YPos;
        let enemy4Bottom = enemy4YPos + 20;
       
        let enemy5Left = enemy5XPos;
        let enemy5Right = enemy5XPos + 16;
        let enemy5Top = enemy5YPos;
        let enemy5Bottom = enemy5YPos + 20;
        
        let enemy6Left = enemy6XPos;
        let enemy6Right = enemy6XPos + 16;
        let enemy6Top = enemy6YPos;
        let enemy6Bottom = enemy6YPos + 20;
       
        let enemy7Left = enemy7XPos;
        let enemy7Right = enemy7XPos + 16;
        let enemy7Top = enemy7YPos;
        let enemy7Bottom = enemy7YPos + 20;

        let enemy8Left = enemy8XPos;
        let enemy8Right = enemy8XPos + 16;
        let enemy8Top = enemy8YPos;
        let enemy8Bottom = enemy8YPos + 20;

        let enemy9Left = enemy9XPos;
        let enemy9Right = enemy9XPos + 16;
        let enemy9Top = enemy9YPos;
        let enemy9Bottom = enemy9YPos + 20;

        let enemy10Left = enemy10XPos;
        let enemy10Right = enemy10XPos + 16;
        let enemy10Top = enemy10YPos;
        let enemy10Bottom = enemy10YPos + 20;

        //Damsel Edges
        let damselLeft = damselXPos;
        let damselRight = damselXPos + 16;
        let damselTop = damselYPos;
        let damselBottom = damselYPos + 20;

        //C1
        let c1Left = c1x-0;
        let c1Right = c1x + 20;
        let c1Top = c1y-0;
        let c1Bottom = c1y + 75;

        let c2Left = c2x;
        let c2Right = c2x + 30;
        let c2Top = c2y;
        let c2Bottom = c2y + 30;

        let c3Left = c3x;
        let c3Right = c3x + 20;
        let c3Top = c3y;
        let c3Bottom = c3y + 70;

        let c4Left = c4x;
        let c4Right = c4x + 30;
        let c4Top = c4y;
        let c4Bottom = c4y + 25;
        
        let w1Left = w1x;
        let w1Right = w1x + 200;
        let w1Top = w1y;
        let w1Bottom = w1y + 25;
        
        let w3Left = w3x;
        let w3Right = w3x + 200;
        let w3Top = w3y;
        let w3Bottom = w3y + 25;

        let w4Left = w4x;
        let w4Right = w4x + 25;
        let w4Top = w4y;
        let w4Bottom = w4y + 75;
         
        let w5Left = w5x;
        let w5Right = w5x + 25;
        let w5Top = w5y;
        let w5Bottom = w5y + 75;
         
        let w6Left = w6x;
        let w6Right = w6x + 100;
        let w6Top = w6y;
        let w6Bottom = w6y + 25;

        let w7Left = w7x;
        let w7Right = w7x + 100;
        let w7Top = w7y;
        let w7Bottom = w7y + 25;

        let w8Left = w8x;
        let w8Right = w8x + 25;
        let w8Top = w8y;
        let w8Bottom = w8y + 175;

         let w9Left = w9x;
        let w9Right = w9x + 25;
        let w9Top = w9y;
        let w9Bottom = w9y + 175;

        let w10Left = w10x;
        let w10Right = w10x + 100;
        let w10Top = w10y;
        let w10Bottom = w10y + 25;

         let w11Left = w11x;
        let w11Right = w11x + 200;
        let w11Top = w11y;
        let w11Bottom = w11y + 12.5;
         
        let w12Left = w12x;
        let w12Right = w12x + 25;
        let w12Top = w12y;
        let w12Bottom = w12y + 100;
        
         let w13Left = w13x;
        let w13Right = w13x + 350;
        let w13Top = w13y;
        let w13Bottom = w13y + 25;

        let w15Left = w15x;
        let w15Right = w15x + 200;
        let w15Top = w15y;
        let w15Bottom = w15y + 12.5;

        //enemy movement
        
        enemyYPos += 3 * direction;
            if(enemyYPos < 25 || enemyYPos > 450){
                direction *= -1
            }
        enemy2YPos += 3 * direction2;
            if(enemy2YPos < 350 || enemy2YPos > 450){
                direction2 *= -1
        }
        enemy3YPos += 3 * direction3;
        if(enemy3YPos < 25 || enemy3YPos > 225){
            direction3 *= -1
    }
        enemy4YPos += 3 * direction4;
        if(enemy4YPos < 25 || enemy4YPos > 450){
            direction4 *= -1
}
        enemy5XPos += 3 * direction5;
        if(enemy5XPos < 75 || enemy5XPos > 400){
            direction5 *= -1
}
        enemy6XPos += 3 * direction6;
        if(enemy6XPos < 75 || enemy6XPos > 200){
            direction6 *= -1
}
        enemy7XPos += 3 * direction7;
        if(enemy7XPos < 275 || enemy7XPos > 400){
            direction7 *= -1
}
        enemy8XPos += 3 * direction8;
        if(enemy8XPos < 75 || enemy8XPos > 200){
            direction8 *= -1
}
        enemy9XPos += 3 * direction9;
        if(enemy9XPos < 275 || enemy9XPos > 400){
            direction9 *= -1
}
        enemy10XPos += 3 * direction10;
        if(enemy10XPos < 75 || enemy10XPos > 400){
            direction10 *= -1
}

        //Detecting Enemy Player Collision
        if(enemyRight < myLeft || myRight < enemyLeft || myTop > enemyBottom || enemyTop > myBottom) {

        }
            else{
                state = 6    
        }
        
        if(enemy2Right < myLeft || myRight < enemy2Left || myTop > enemy2Bottom || enemy2Top > myBottom) {

        }
            else{
                state = 6      
        }
        
        if(enemy3Right < myLeft || myRight < enemy3Left || myTop > enemy3Bottom || enemy3Top > myBottom) {

        }
            else{
                state = 6      
        }
        
        if(enemy4Right < myLeft || myRight < enemy4Left || myTop > enemy4Bottom || enemy4Top > myBottom) {

        }
            else{
                state = 6     
        }

        if(enemy5Right < myLeft || myRight < enemy5Left || myTop > enemy5Bottom || enemy5Top > myBottom) {

        }
            else{
                state = 6     
        }
        
        if(enemy6Right < myLeft || myRight < enemy6Left || myTop > enemy6Bottom || enemy6Top > myBottom) {

        }
            else{
                state = 6      
        }
        
        if(enemy7Right < myLeft || myRight < enemy7Left || myTop > enemy7Bottom || enemy7Top > myBottom) {

        }
            else{
                state = 6      
        }

        if(enemy8Right < myLeft || myRight < enemy8Left || myTop > enemy8Bottom || enemy8Top > myBottom) {

        }
            else{
                state = 6      
        }

        if(enemy9Right < myLeft || myRight < enemy9Left || myTop > enemy9Bottom || enemy9Top > myBottom) {

        }
            else{
                state = 6     
        }

        if(enemy10Right < myLeft || myRight < enemy10Left || myTop > enemy10Bottom || enemy10Top > myBottom) {

        }
            else{
                state = 6      
        }


        //Detecting Damsel Player Collision
        if(damselRight < myLeft || myRight < damselLeft || myTop > damselBottom || damselTop > myBottom){
            
        }
            else{
                state = 4
            }
        //Detecting Wall Player Collision
        if(myTop > 25){
            
        }
            else{
                myYPos +=3
            }

             //C1 Collision
        if(c1Right < myLeft || myRight < c1Left || myTop > c1Bottom || c1Top > myBottom) {

        }
            else{
                myXPos -=3;
                myYPos -=3   
              
            } 
        if(c2Right < myLeft || myRight < c2Left || myTop > c2Bottom || c2Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                   
                }      
        if(c3Right < myLeft || myRight < c3Left || myTop > c3Bottom || c3Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        } 
        if(c4Right < myLeft || myRight < c4Left || myTop > c4Bottom || c4Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        } 
        if(w1Right < myLeft || myRight < w1Left || myTop > w1Bottom || w1Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
        
        if(w3Right < myLeft || myRight < w3Left || myTop > w3Bottom || w3Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        
        if(w4Right < myLeft || myRight < w4Left || myTop > w4Bottom || w4Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w5Right < myLeft || myRight < w5Left || myTop > w5Bottom || w5Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        if(w6Right < myLeft || myRight < w6Left || myTop > w6Bottom || w6Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w7Right < myLeft || myRight < w7Left || myTop > w7Bottom || w7Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w8Right < myLeft || myRight < w8Left || myTop > w8Bottom || w8Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w9Right < myLeft || myRight < w9Left || myTop > w9Bottom || w9Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w10Right < myLeft || myRight < w10Left || myTop > w10Bottom || w10Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3;   
                    
        }
        if(w11Right < myLeft || myRight < w11Left || myTop > w11Bottom || w11Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        if(w12Right < myLeft || myRight < w12Left || myTop > w12Bottom || w12Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w13Right < myLeft || myRight < w13Left || myTop > w13Bottom || w13Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
       if(w15Right < myLeft || myRight < w15Left || myTop > w15Bottom || w15Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        
        
        
        
        
         

        //Player Movement
        if (keyIsDown(LEFT_ARROW)) {
            myXPos -= 3;
    }
    
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos += 3;
    }
    
        if (keyIsDown(UP_ARROW)) {
            myYPos -= 3;
    }
    
         if (keyIsDown(DOWN_ARROW)) {
            myYPos += 3;
    }

}//state 5 end

    

    if(state == 7) {    //state 7 start
       
        //Backround
        background(0);
        if (myXPos > 475) {
            myXPos -= 3
        }
        if (myXPos < 0) {
            myXPos += 3
        }
            //floor layer #1
        image(floor,0,25,25,25)
        image(floor,25,25,25,25)
        image(floor,50,25,25,25)
        image(floor,75,25,25,25)
        image(floor,100,25,25,25)
        image(floor,125,25,25,25)
        image(floor,150,25,25,25)
        image(floor,175,25,25,25)
        image(floor,200,25,25,25)
        image(floor,225,25,25,25)
        image(floor,250,25,25,25)
        image(floor,275,25,25,25)
        image(floor,300,25,25,25)
        image(floor,325,25,25,25)
        image(floor,350,25,25,25)
        image(floor,375,25,25,25)
        image(floor,400,25,25,25)
        image(floor,425,25,25,25)
        image(floor,450,25,25,25)
        image(floor,475,25,25,25)
            
            //floor layer #2
        image(floor,0,50,25,25)
        image(floor,25,50,25,25)
        image(floor,50,50,25,25)
        image(floor,75,50,25,25)
        image(floor,100,50,25,25)
        image(floor,125,50,25,25)
        image(floor,150,50,25,25)
        image(floor,175,50,25,25)
        image(floor,200,50,25,25)
        image(floor,225,50,25,25)
        image(floor,250,50,25,25)
        image(floor,275,50,25,25)
        image(floor,300,50,25,25)
        image(floor,325,50,25,25)
        image(floor,350,50,25,25)
        image(floor,375,50,25,25)
        image(floor,400,50,25,25)
        image(floor,425,50,25,25)
        image(floor,450,50,25,25)
        image(floor,475,50,25,25)
            //floor layer #3
        image(floor,0,75,25,25)
        image(floor,25,75,25,25)
        image(floor,50,75,25,25)
        image(floor,75,75,25,25)
        image(floor,100,75,25,25)
        image(floor,125,75,25,25)
        image(floor,150,75,25,25)
        image(floor,175,75,25,25)
        image(floor,200,75,25,25)
        image(floor,225,75,25,25)
        image(floor,250,75,25,25)
        image(floor,275,75,25,25)
        image(floor,300,75,25,25)
        image(floor,325,75,25,25)
        image(floor,350,75,25,25)
        image(floor,375,75,25,25)
        image(floor,400,75,25,25)
        image(floor,425,75,25,25)
        image(floor,450,75,25,25)
        image(floor,475,75,25,25)

        image(floor,175,100,25,25)
        image(floor,200,100,25,25)
        image(floor,225,100,25,25)
        image(floor,250,100,25,25)
        image(floor,275,100,25,25)
        image(floor,300,100,25,25)

        image(floor,175,125,25,25)
        image(floor,200,125,25,25)
        image(floor,225,125,25,25)
        image(floor,250,125,25,25)
        image(floor,275,125,25,25)
        image(floor,300,125,25,25)

        image(floor,175,150,25,25)
        image(floor,200,150,25,25)
        image(floor,225,150,25,25)
        image(floor,250,150,25,25)
        image(floor,275,150,25,25)
        image(floor,300,150,25,25)

        image(floor,175,175,25,25)
        image(floor,200,175,25,25)
        image(floor,225,175,25,25)
        image(floor,250,175,25,25)
        image(floor,275,175,25,25)
        image(floor,300,175,25,25)

        image(floor,175,200,25,25)
        image(floor,200,200,25,25)
        image(floor,225,200,25,25)
        image(floor,250,200,25,25)
        image(floor,275,200,25,25)
        image(floor,300,200,25,25)

        image(floor,75,225,25,25)
        image(floor,100,225,25,25)
        image(floor,125,225,25,25)
        image(floor,150,225,25,25)
        image(floor,175,225,25,25)
        image(floor,200,225,25,25)
        image(floor,225,225,25,25)
        image(floor,250,225,25,25)
        image(floor,275,225,25,25)
        image(floor,300,225,25,25)
        image(floor,325,225,25,25)
        image(floor,350,225,25,25)
        image(floor,375,225,25,25)
        image(floor,400,225,25,25)

        image(floor,75,250,25,25)
        image(floor,100,250,25,25)
        image(floor,125,250,25,25)
        image(floor,150,250,25,25)
        image(floor,175,250,25,25)
        image(floor,200,250,25,25)
        image(floor,275,250,25,25)
        image(floor,300,250,25,25)
        image(floor,325,250,25,25)
        image(floor,350,250,25,25)
        image(floor,375,250,25,25)
        image(floor,400,250,25,25)
        
        image(floor,75,275,25,25)
        image(floor,100,275,25,25)
        image(floor,125,275,25,25)
        image(floor,150,275,25,25)
        image(floor,175,275,25,25)
        image(floor,200,275,25,25)
        image(floor,275,275,25,25)
        image(floor,300,275,25,25)
        image(floor,325,275,25,25)
        image(floor,350,275,25,25)
        image(floor,375,275,25,25)
        image(floor,400,275,25,25)

        image(floor,75,300,25,25)
        image(floor,100,300,25,25)
        image(floor,125,300,25,25)
        image(floor,150,300,25,25)
        image(floor,175,300,25,25)
        image(floor,200,300,25,25)
        image(floor,275,300,25,25)
        image(floor,300,300,25,25)
        image(floor,325,300,25,25)
        image(floor,350,300,25,25)
        image(floor,375,300,25,25)
        image(floor,400,300,25,25)
        
        image(floor,75,325,25,25)
        image(floor,100,325,25,25)
        image(floor,125,325,25,25)
        image(floor,150,325,25,25)
        image(floor,175,325,25,25)
        image(floor,200,325,25,25)
        image(floor,275,325,25,25)
        image(floor,300,325,25,25)
        image(floor,325,325,25,25)
        image(floor,350,325,25,25)
        image(floor,375,325,25,25)
        image(floor,400,325,25,25)

        image(floor,75,350,25,25)
        image(floor,100,350,25,25)
        image(floor,125,350,25,25)
        image(floor,150,350,25,25)
        image(floor,175,350,25,25)
        image(floor,200,350,25,25)
        image(floor,225,350,25,25)
        image(floor,250,350,25,25)
        image(floor,275,350,25,25)
        image(floor,300,350,25,25)
        image(floor,325,350,25,25)
        image(floor,350,350,25,25)
        image(floor,375,350,25,25)
        image(floor,400,350,25,25)

        image(floor,150,375,25,25)
        image(floor,175,375,25,25)
        image(floor,200,375,25,25)
        image(floor,225,375,25,25)
        image(floor,250,375,25,25)
        image(floor,275,375,25,25)
        image(floor,300,375,25,25)
        image(floor,325,375,25,25)

        image(floor,150,400,25,25)
        image(floor,175,400,25,25)
        image(floor,200,400,25,25)
        image(floor,225,400,25,25)
        image(floor,250,400,25,25)
        image(floor,275,400,25,25)
        image(floor,300,400,25,25)
        image(floor,325,400,25,25)
        image(floor,350,400,25,25)
        image(floor,375,400,25,25)
        image(floor,400,400,25,25)
        image(floor,425,400,25,25)
        image(floor,450,400,25,25)
        image(floor,475,400,25,25)

        image(floor,150,425,25,25)
        image(floor,175,425,25,25)
        image(floor,200,425,25,25)
        image(floor,225,425,25,25)
        image(floor,250,425,25,25)
        image(floor,275,425,25,25)
        image(floor,300,425,25,25)
        image(floor,325,425,25,25)
        image(floor,350,425,25,25)
        image(floor,375,425,25,25)
        image(floor,400,425,25,25)
        image(floor,425,425,25,25)
        image(floor,450,425,25,25)
        image(floor,475,425,25,25)

        image(floor,150,450,25,25)
        image(floor,175,450,25,25)
        image(floor,200,450,25,25)
        image(floor,225,450,25,25)
        image(floor,250,450,25,25)
        image(floor,275,450,25,25)
        image(floor,300,450,25,25)
        image(floor,325,450,25,25)
        image(floor,350,450,25,25)
        image(floor,375,450,25,25)
        image(floor,400,450,25,25)
        image(floor,425,450,25,25)
        image(floor,450,450,25,25)
        image(floor,475,450,25,25)




        

        
        //Creating the Character
        image(mainCharacter, myXPos, myYPos, 25, 25);
        
        //Creating the Enemy
        fill(0,255,0);
        image(enemy1, enemyXPos, enemyYPos, 20, 20);
        image(enemy1, enemy2XPos, enemy2YPos, 20, 20);
        image(enemy2, enemy3XPos, enemy3YPos, 20, 20);
        image(enemy1,enemy4XPos, enemy4YPos, 25, 20);
        image(enemy3,enemy5XPos, enemy5YPos, 20, 20);
        image(enemy2,enemy6XPos, enemy6YPos, 20, 20);
        image(enemy3,enemy7XPos, enemy7YPos, 20, 20);
        image(enemy1,enemy8XPos, enemy8YPos, 20, 20);
        image(enemy2,enemy9XPos, enemy9YPos, 20, 20);
        image(enemy2,enemy10XPos, enemy10YPos, 20, 20);

        //Creating the Damsel
        fill(0,255,255);
        image(damsel, damselXPos, damselYPos, 16, 24); 

        //Center 
        fill(89,24,35)
        //c1
        rect(c1x,c1y,20,75)
        //c2
        rect(c2x,c2y, 30,30);
        //c3
        rect(c3x,c3y,20,70);
        //c4
        rect(c4x,c4y,30,25);

    
        
        //Creating walls
            //wall #1
            fill(0);
       //fill(89,24,35)
        rect(w1x,w1y, 200, 25)
            //wall #2
       
        rect(w2x,w2y, 500, 25);
            //wall #3
       
        rect(w3x, w3y, 200, 25)
            //wall #4
        
        rect(w4x, w4y, 25, 75)
            //wall #5
       
        rect(w5x, w5y, 25, 75)
            //wall #6
      
        rect(w6x, w6y, 100, 25)
            //wall #7
       
        rect(w7x, w7y, 100, 25)
            //wall #8
       
        rect(w8x, w8y, 25, 175)
            //wall #9
    
        rect(w9x, w9y, 25, 175)
            //wall #10
        rect(w10x, w10y, 100, 25)
            //wall #11
        rect(w11x, w11y, 200, 12.5)
            //wall #12
        rect(w12x,w12y,25,100)
            //wall #13
        rect(w13x,w13y,350,25)
            //wall #14
        rect(w14x,w14y,50,100);
            //wall #15
        rect(w15x,w15y,200,12.5);
        

        //drawn walls
        //wall section #1
        image(wall1, 0, 100, 25, 25)
        image(wall2, 0, 75, 25, 25)
        image(wall1, 25, 100, 25, 25)
        image(wall2, 25, 75, 25, 25)
        image(wall1, 50, 100, 25, 25)
        image(wall2, 50, 75, 25, 25)
        image(wall1, 75, 100, 25, 25)
        image(wall2, 75, 75, 25, 25)
        image(wall1, 100, 100, 25, 25)
        image(wall2, 100, 75, 25, 25)
        image(wall1, 125, 100, 25, 25)
        image(wall2, 125, 75, 25, 25)
        image(wall3, 150, 100, 25, 25)
        image(wall4, 150, 75, 25, 25)
        //wall section #2
        image(wall1, 0, 0, 25, 25)
        image(wall2, 0, -20, 25, 25)
        image(wall1, 25, 0, 25, 25)
        image(wall2, 25, -20, 25, 25)
        image(wall1, 50, 0, 25, 25)
        image(wall2, 50, -20, 25, 25)
        image(wall1, 75, 0, 25, 25)
        image(wall2, 75, -20, 25, 25)
        image(wall1, 100, 0, 25, 25)
        image(wall2, 100, -20, 25, 25)
        image(wall1, 125, 0, 25, 25)
        image(wall2, 125, -20, 25, 25)
        image(wall1, 150, 0, 25, 25)
        image(wall2, 150, -20, 25, 25)
        image(wall1, 175, 0, 25, 25)
        image(wall2, 175, -20, 25, 25)
        image(wall1, 200, 0, 25, 25)
        image(wall2, 200, -20, 25, 25)
        image(wall1, 225, 0, 25, 25)
        image(wall2, 225, -20, 25, 25)
        image(wall1, 250, 0, 25, 25)
        image(wall2, 250, -20, 25, 25)
        image(wall1, 275, 0, 25, 25)
        image(wall2, 275, -20, 25, 25)
        image(wall1, 300, 0, 25, 25)
        image(wall2, 300, -20, 25, 25)
        image(wall1, 325, 0, 25, 25)
        image(wall2, 325, -20, 25, 25)
        image(wall1, 350, 0, 25, 25)
        image(wall2, 350, -20, 25, 25)
        image(wall1, 375, 0, 25, 25)
        image(wall2, 375, -20, 25, 25)
        image(wall1, 400, 0, 25, 25)
        image(wall2, 400, -20, 25, 25)
        image(wall1, 425, 0, 25, 25)
        image(wall2, 425, -20, 25, 25)
        image(wall1, 450, 0, 25, 25)
        image(wall2, 450, -20, 25, 25)
        image(wall1, 475, 0, 25, 25)
        image(wall2, 475, -20, 25, 25)

        //wall section #3
        image(wall1, 350, 100, 25, 25)
        image(wall2, 350, 75, 25, 25)
        image(wall1, 375, 100, 25, 25)
        image(wall2, 375, 75, 25, 25)
        image(wall1, 400, 100, 25, 25)
        image(wall2, 400, 75, 25, 25)
        image(wall1, 425, 100, 25, 25)
        image(wall2, 425, 75, 25, 25)
        image(wall1, 450, 100, 25, 25)
        image(wall2, 450, 75, 25, 25)
        image(wall1, 475, 100, 25, 25)
        image(wall2, 475, 75, 25, 25)
        image(wall8, 325, 75, 25, 25)
        image(wall7, 325, 100, 25, 25)

        //wall section #4
        image(wall6, 150, 125, 25, 25)
        image(wall6, 150, 150, 25, 25)
        image(wall6, 150, 175, 25, 25)

        //wall section #5
        image(wall5, 325, 125, 25, 25)
        image(wall5, 325, 150, 25, 25)
        image(wall5, 325, 175, 25, 25)
        
        //wall section #6
        image(wall1, 75, 200, 25, 25)
        image(wall2, 75, 175, 25, 25)
        image(wall1, 100, 200, 25, 25)
        image(wall2, 100, 175, 25, 25)
        image(wall1, 125, 200, 25, 25)
        image(wall2, 125, 175, 25, 25)
        image(wall1, 150, 200, 25, 25)
        image(wall2, 150, 175, 25, 25)

         //wall section #7
        image(wall1, 325, 200, 25, 25)
        image(wall2, 325, 175, 25, 25)
        image(wall1, 350, 200, 25, 25)
        image(wall2, 350, 175, 25, 25)
        image(wall1, 375, 200, 25, 25)
        image(wall2, 375, 175, 25, 25)
        image(wall1, 400, 200, 25, 25)
        image(wall2, 400, 175, 25, 25)

          //wall section #8
        image(wall6, 50, 195, 25, 30)
        image(wall6, 50, 225, 25, 25)
        image(wall6, 50, 250, 25, 25)
        image(wall6, 50, 275, 25, 25)
        image(wall6, 50, 300, 25, 25)
        image(wall6, 50, 325, 25, 25)
        image(wall6, 50, 350, 25, 25)
        //image(wall6, 50, 350, 25, 25)

        //wall section #9
        image(wall5, 425, 195, 25, 25)
        image(wall5, 425, 200, 25, 25)
        image(wall5, 425, 225, 25, 25)
        image(wall5, 425, 250, 25, 25)
        image(wall5, 425, 275, 25, 25)
        image(wall5, 425, 300, 25, 25)
        image(wall5, 425, 325, 25, 25)
        image(wall5, 425, 350, 25, 25)

        //wall section #10
        image(wall1, 68.5, 375, 27, 25)
        image(wall2, 70, 350, 25, 25)
        image(wall1, 95, 375, 25, 25)
        image(wall2, 95, 350, 25, 25)
        image(wall1, 120, 375, 25, 25)
        image(wall2, 120, 350, 28, 25)

        //wall section #11
        image(wall1, 350, 375, 25, 25)
        image(wall2, 350, 350, 25, 25)
        image(wall1, 375, 375, 25, 25)
        image(wall2, 375, 350, 25, 25)
        image(wall1, 400, 375, 25, 25)
        image(wall2, 400, 350, 25, 25)
        image(wall1, 425, 375, 25, 25)
        image(wall2, 425, 350, 25, 25)
        image(wall1, 450, 375, 25, 25)
        image(wall2, 450, 350, 25, 25)
        image(wall1, 475, 375, 25, 25)
        image(wall2, 475, 350, 25, 25)

        //wall section #12
        image(wall6, 125, 375, 25, 25)
        image(wall6, 125, 400, 25, 25)
        image(wall6, 125, 425, 25, 25)
        image(wall6, 125, 450, 25, 25)
        
        //wall section #13
        image(wall1, 150, 475, 25, 25)
        image(wall2, 150, 450, 25, 25)
        image(wall1, 175, 475, 25, 25)
        image(wall2, 175, 450, 25, 25)
        image(wall1, 200, 475, 25, 25)
        image(wall2, 200, 450, 25, 25)
        image(wall1, 225, 475, 25, 25)
        image(wall2, 225, 450, 25, 25)
        image(wall1, 250, 475, 25, 25)
        image(wall2, 250, 450, 25, 25)
        image(wall1, 275, 475, 25, 25)
        image(wall2, 275, 450, 25, 25)
        image(wall1, 300, 475, 25, 25)
        image(wall2, 300, 450, 25, 25)
        image(wall1, 325, 475, 25, 25)
        image(wall2, 325, 450, 25, 25)
        image(wall1, 350, 475, 25, 25)
        image(wall2, 350, 450, 25, 25)
        image(wall1, 375, 475, 25, 25)
        image(wall2, 375, 450, 25, 25)
        image(wall1, 400, 475, 25, 25)
        image(wall2, 400, 450, 25, 25)
        image(wall1, 425, 475, 25, 25)
        image(wall2, 425, 450, 25, 25)
        image(wall1, 450, 475, 25, 25)
        image(wall2, 450, 450, 25, 25)
        image(wall1, 475, 475, 25, 25)
        image(wall2, 475, 450, 25, 25)
        image(wall1, 143, 475, 25, 25)

        //spike trap
        image(spike,250,250,25,25)
        image(spike,250,275,25,25)
        image(spike,250,300,25,25)
        image(spike,250,325,25,25)
        image(spike,225,250,25,25)
        image(spike,225,275,25,25)
        image(spike,225,300,25,25)
        image(spike,225,325,25,25)
        
        //Character Edges
        let myLeft = myXPos;
        let myRight = myXPos + 16;
        let myTop = myYPos;
        let myBottom = myYPos + 28;

        //Enemy Edges
        let enemyLeft = enemyXPos;
        let enemyRight = enemyXPos + 16;
        let enemyTop = enemyYPos;
        let enemyBottom = enemyYPos + 20;
        
        let enemy2Left = enemy2XPos;
        let enemy2Right = enemy2XPos + 16;
        let enemy2Top = enemy2YPos;
        let enemy2Bottom = enemy2YPos + 20;
       
        let enemy3Left = enemy3XPos;
        let enemy3Right = enemy3XPos + 16;
        let enemy3Top = enemy3YPos;
        let enemy3Bottom = enemy3YPos + 20;
       
        let enemy4Left = enemy4XPos;
        let enemy4Right = enemy4XPos + 16;
        let enemy4Top = enemy4YPos;
        let enemy4Bottom = enemy4YPos + 20;
       
        let enemy5Left = enemy5XPos;
        let enemy5Right = enemy5XPos + 16;
        let enemy5Top = enemy5YPos;
        let enemy5Bottom = enemy5YPos + 20;
        
        let enemy6Left = enemy6XPos;
        let enemy6Right = enemy6XPos + 16;
        let enemy6Top = enemy6YPos;
        let enemy6Bottom = enemy6YPos + 20;
       
        let enemy7Left = enemy7XPos;
        let enemy7Right = enemy7XPos + 16;
        let enemy7Top = enemy7YPos;
        let enemy7Bottom = enemy7YPos + 20;

        let enemy8Left = enemy8XPos;
        let enemy8Right = enemy8XPos + 16;
        let enemy8Top = enemy8YPos;
        let enemy8Bottom = enemy8YPos + 20;

        let enemy9Left = enemy9XPos;
        let enemy9Right = enemy9XPos + 16;
        let enemy9Top = enemy9YPos;
        let enemy9Bottom = enemy9YPos + 20;

        let enemy10Left = enemy10XPos;
        let enemy10Right = enemy10XPos + 16;
        let enemy10Top = enemy10YPos;
        let enemy10Bottom = enemy10YPos + 20;

        //Damsel Edges
        let damselLeft = damselXPos;
        let damselRight = damselXPos + 16;
        let damselTop = damselYPos;
        let damselBottom = damselYPos + 20;

        //C1
        let c1Left = c1x-0;
        let c1Right = c1x + 20;
        let c1Top = c1y-0;
        let c1Bottom = c1y + 75;

        let c2Left = c2x;
        let c2Right = c2x + 30;
        let c2Top = c2y;
        let c2Bottom = c2y + 30;

        let c3Left = c3x;
        let c3Right = c3x + 20;
        let c3Top = c3y;
        let c3Bottom = c3y + 70;

        let c4Left = c4x;
        let c4Right = c4x + 30;
        let c4Top = c4y;
        let c4Bottom = c4y + 25;
        
        let w1Left = w1x;
        let w1Right = w1x + 200;
        let w1Top = w1y;
        let w1Bottom = w1y + 25;
        
        let w3Left = w3x;
        let w3Right = w3x + 200;
        let w3Top = w3y;
        let w3Bottom = w3y + 25;

        let w4Left = w4x;
        let w4Right = w4x + 25;
        let w4Top = w4y;
        let w4Bottom = w4y + 75;
         
        let w5Left = w5x;
        let w5Right = w5x + 25;
        let w5Top = w5y;
        let w5Bottom = w5y + 75;
         
        let w6Left = w6x;
        let w6Right = w6x + 100;
        let w6Top = w6y;
        let w6Bottom = w6y + 25;

        let w7Left = w7x;
        let w7Right = w7x + 100;
        let w7Top = w7y;
        let w7Bottom = w7y + 25;

        let w8Left = w8x;
        let w8Right = w8x + 25;
        let w8Top = w8y;
        let w8Bottom = w8y + 175;

         let w9Left = w9x;
        let w9Right = w9x + 25;
        let w9Top = w9y;
        let w9Bottom = w9y + 175;

        let w10Left = w10x;
        let w10Right = w10x + 100;
        let w10Top = w10y;
        let w10Bottom = w10y + 25;

         let w11Left = w11x;
        let w11Right = w11x + 200;
        let w11Top = w11y;
        let w11Bottom = w11y + 12.5;
         
        let w12Left = w12x;
        let w12Right = w12x + 25;
        let w12Top = w12y;
        let w12Bottom = w12y + 100;
        
         let w13Left = w13x;
        let w13Right = w13x + 350;
        let w13Top = w13y;
        let w13Bottom = w13y + 25;

        let w15Left = w15x;
        let w15Right = w15x + 200;
        let w15Top = w15y;
        let w15Bottom = w15y + 12.5;

        //enemy movement
        
        enemyYPos += 5 * direction;
            if(enemyYPos < 25 || enemyYPos > 450){
                direction *= -1
            }
        enemy2YPos += 5 * direction2;
            if(enemy2YPos < 350 || enemy2YPos > 450){
                direction2 *= -1
        }
        enemy3YPos += 5 * direction3;
        if(enemy3YPos < 25 || enemy3YPos > 225){
            direction3 *= -1
    }
        enemy4YPos += 5 * direction4;
        if(enemy4YPos < 25 || enemy4YPos > 450){
            direction4 *= -1
}
        enemy5XPos += 5 * direction5;
        if(enemy5XPos < 75 || enemy5XPos > 400){
            direction5 *= -1
}
        enemy6XPos += 5 * direction6;
        if(enemy6XPos < 75 || enemy6XPos > 200){
            direction6 *= -1
}
        enemy7XPos += 5 * direction7;
        if(enemy7XPos < 275 || enemy7XPos > 400){
            direction7 *= -1
}
        enemy8XPos += 5 * direction8;
        if(enemy8XPos < 75 || enemy8XPos > 200){
            direction8 *= -1
}
        enemy9XPos += 5 * direction9;
        if(enemy9XPos < 275 || enemy9XPos > 400){
            direction9 *= -1
}
        enemy10XPos += 5 * direction10;
        if(enemy10XPos < 75 || enemy10XPos > 400){
            direction10 *= -1
}

        //Detecting Enemy Player Collision
        if(enemyRight < myLeft || myRight < enemyLeft || myTop > enemyBottom || enemyTop > myBottom) {

        }
            else{
                state = 8   
        }
        
        if(enemy2Right < myLeft || myRight < enemy2Left || myTop > enemy2Bottom || enemy2Top > myBottom) {

        }
            else{
                state = 8      
        }
        
        if(enemy3Right < myLeft || myRight < enemy3Left || myTop > enemy3Bottom || enemy3Top > myBottom) {

        }
            else{
                state = 8      
        }
        
        if(enemy4Right < myLeft || myRight < enemy4Left || myTop > enemy4Bottom || enemy4Top > myBottom) {

        }
            else{
                state = 8     
        }

        if(enemy5Right < myLeft || myRight < enemy5Left || myTop > enemy5Bottom || enemy5Top > myBottom) {

        }
            else{
                state = 8     
        }
        
        if(enemy6Right < myLeft || myRight < enemy6Left || myTop > enemy6Bottom || enemy6Top > myBottom) {

        }
            else{
                state = 8      
        }
        
        if(enemy7Right < myLeft || myRight < enemy7Left || myTop > enemy7Bottom || enemy7Top > myBottom) {

        }
            else{
                state = 8      
        }

        if(enemy8Right < myLeft || myRight < enemy8Left || myTop > enemy8Bottom || enemy8Top > myBottom) {

        }
            else{
                state = 8      
        }

        if(enemy9Right < myLeft || myRight < enemy9Left || myTop > enemy9Bottom || enemy9Top > myBottom) {

        }
            else{
                state = 8     
        }

        if(enemy10Right < myLeft || myRight < enemy10Left || myTop > enemy10Bottom || enemy10Top > myBottom) {

        }
            else{
                state = 8      
        }


        //Detecting Damsel Player Collision
        if(damselRight < myLeft || myRight < damselLeft || myTop > damselBottom || damselTop > myBottom){
            
        }
            else{
                state = 4
            }
        //Detecting Wall Player Collision
        if(myTop > 25){
            
        }
            else{
                myYPos +=3
            }

             //C1 Collision
        if(c1Right < myLeft || myRight < c1Left || myTop > c1Bottom || c1Top > myBottom) {

        }
            else{
                myXPos -=3;
                myYPos -=3   
              
            } 
        if(c2Right < myLeft || myRight < c2Left || myTop > c2Bottom || c2Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                   
                }      
        if(c3Right < myLeft || myRight < c3Left || myTop > c3Bottom || c3Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        } 
        if(c4Right < myLeft || myRight < c4Left || myTop > c4Bottom || c4Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        } 
        if(w1Right < myLeft || myRight < w1Left || myTop > w1Bottom || w1Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
        
        if(w3Right < myLeft || myRight < w3Left || myTop > w3Bottom || w3Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        
        if(w4Right < myLeft || myRight < w4Left || myTop > w4Bottom || w4Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w5Right < myLeft || myRight < w5Left || myTop > w5Bottom || w5Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        if(w6Right < myLeft || myRight < w6Left || myTop > w6Bottom || w6Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w7Right < myLeft || myRight < w7Left || myTop > w7Bottom || w7Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w8Right < myLeft || myRight < w8Left || myTop > w8Bottom || w8Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3;   
                    
        }
        if(w9Right < myLeft || myRight < w9Left || myTop > w9Bottom || w9Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3;   
                    
        }
        if(w10Right < myLeft || myRight < w10Left || myTop > w10Bottom || w10Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3;   
                    
        }
        if(w11Right < myLeft || myRight < w11Left || myTop > w11Bottom || w11Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos -=3;   
                    
        }
        if(w12Right < myLeft || myRight < w12Left || myTop > w12Bottom || w12Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos +=3   
                    
        }
        if(w13Right < myLeft || myRight < w13Left || myTop > w13Bottom || w13Top > myBottom) {

        }
            else{
                    myXPos +=3;
                    myYPos -=3   
                    
        }
       if(w15Right < myLeft || myRight < w15Left || myTop > w15Bottom || w15Top > myBottom) {

        }
            else{
                    myXPos -=3;
                    myYPos +=3   
                    
        }
        //Player Movement
        if (keyIsDown(LEFT_ARROW)) {
            myXPos -= 3;
    }
    
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos += 3;
    }
    
        if (keyIsDown(UP_ARROW)) {
            myYPos -= 3;
    }
    
         if (keyIsDown(DOWN_ARROW)) {
            myYPos += 3;
    }

}//state 7 end


//State 3
function state3(){
    if (state == 3){ //state 3 start
    background(186, 120,13);

    image(gameOver,0,0,500,500);

    image(restart,210,415,80,80);
    
    image(exit,450,0,50,50);
    fill(255,255,255);
    textSize(15);
    textStyle(BOLD);
    textFont('Minecraft');
    text('exit', 464,45);
    
   
   
    
    myXPos = 50;
    myYPos = 50;
    
    }//state 3 end
} 
state3();
   
function state4(){
    if (state==4){
    background(53, 137, 240);
    image(win,0,0,500,500)
    fill(230,204,30);
    //restart button
    //rect(250,300,100,100);
    fill(230,203,230);
    textSize(50);
    //text('You Win',155,200 );
    fill(100,100,100);
    textSize(30);
    image(restart,200,300,100,100);
     myXPos = 50;
     myYPos = 50;

        }//state 4 end
    } 
state4();

//state 6 
function state6(){
    if (state == 6){ //state 6 start
        background(186, 120,13);
    
        image(gameOver,0,0,500,500);
    
        image(restart,210,415,80,80);
        
    
        image(exit,450,0,50,50);
        fill(255,255,255);
        textSize(15);
        textStyle(BOLD);
        textFont('Minecraft');
        text('exit', 464,45);
        
        myXPos = 50;
        myYPos = 50;
    
    }//state 6 end
} 
state6();

//state 8 
function state8(){
    if (state == 8){ //state 6 start
        background(186, 120,13);
    
        image(gameOver,0,0,500,500);
    
        image(restart,210,415,80,80);
       
        image(exit,450,0,50,50);
        fill(255,255,255);
        textSize(15);
        textStyle(BOLD);
        textFont('Minecraft');
        text('exit', 464,45);
        myYPos = 50
        myXPos = 25
    }//state 6 end
} 
        state8();
     
        //End Of Game Sequence
}
        //Mouse clicked 

        
        
        
function mouseClicked(){
        //State 1- state 2
        if (state==1&&mouseX>180&&mouseX<320&&mouseY>270&&mouseY<320){
        state=2;
        }
        //State 1 - state 5
        if (state==1&&mouseX>180&&mouseX<320&&mouseY>330&&mouseY<380){
            state=5;
            }

        //State 1 - state 7
        if (state==1&&mouseX>180&&mouseX<320&&mouseY>390&&mouseY<440){
            state=7;
        }
        
        
        //State 3 - state 2
        if(state == 3 && mouseX>210 && mouseX<290 && mouseY>415 && mouseY<495){
        state = 2;
        }
        
        //State 6 - state 5
        if(state == 6 && mouseX>210 && mouseX<290 && mouseY>415 && mouseY<495){
            state = 5;
        }

        //State 8 - state 7
        if(state == 8 && mouseX>210 && mouseX<290 && mouseY>415 && mouseY<495){
            state = 7;
            }
        //State 4 - state 1
        if(state == 4 && mouseX>200 && mouseX<300 && mouseY>300 && mouseY<400){
            
        state = 1;
        }

        //State 3 exit, 
        if(state == 3 && mouseX>450 && mouseX<500 && mouseY>0 && mouseY<50){
            state = 1;
            }
        //State 6 exit, 
        if(state == 6&& mouseX>450 && mouseX<500 && mouseY>0 && mouseY<50){
            state = 1;
            }
        //State 8 exit, 
        if(state == 8&& mouseX>450 && mouseX<500 && mouseY>0 && mouseY<50){
            state = 1;
            }
         
}


function keyPressed() {
    if (keyCode == 32 && state == 3) {
    state = 2;
    }
    }

function keyPressed() {
     if (keyCode == 32 && state == 6) {
    state = 5;
    }
}
function keyPressed() {
    if (keyCode == 32 && state == 8) {
   state = 7;
   }
}

function keyPressed() {
    if (keyCode == 32 && state == 4) {
   state = 1;
   }
}
