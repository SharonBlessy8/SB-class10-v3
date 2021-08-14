/*var marks = [ 30,24,40,34,23,12];
console.log(marks[0]);

function score_average(){
var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
var avg = sum/marks.length;
console.log(avg);
}
function setup() {
  createCanvas(400, 400);
  score_average();
}

function draw() {
  background(220);
}*/
var s1,s2,s3,s4;
var sprites =[]

function setup() {
  createCanvas(400, 400);
  sprites = [s1,s2,s3,s4];
  s1 = createSprite(75, 100, 30, 30);
  s2 = createSprite(150, 250, 30, 30);
  s3 = createSprite(300, 300, 30, 30);
  s4 = createSprite(350, 150, 30, 30);
  


 console.log(sprites[0].position.x);
}
function draw() {

  background(100,200,50);
  drawSprites();
  
}