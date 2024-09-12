var volhistory = [];
let firstRun = true; 
let stars;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    stars = loadImage("stars.png")
    firstRun = false
  }
  background(0);
  image(stars, 0, 0, width, height)
  let bassMap = map(bass, 0, 100, 0, 1);
push();
translate(200, 0);
//base of the radio
fill(0);
strokeWeight(3);
stroke(27, 127, 120); 
rect(250, 350, 400, 290);
rect(250, 420, 400, 220);
//speaker of the radio - large circles
stroke(255, 72, 88)
fill(255, 72, 88);
let ellipseLength = map(other, 0, 55, 20, 100)
ellipse(380, 400, 130, ellipseLength);
let ellipseLength1 = map(other, 0, 55, 20, 100)
ellipse(120, 400, 130, ellipseLength);
//speaker of the radio - medium circles
fill(27, 127, 120);
stroke(27, 127, 120);
let ellipseLength2 = map(drum, 0, 150, 20, 100)
ellipse(380, 400, 60, ellipseLength2);
let ellipseLength3 = map(drum, 0, 150, 20, 100)
ellipse(120, 400, 60, ellipseLength3);
//speaker of the radio - small circle 
fill(0, 204, 190);
stroke(0, 204, 190);
let ellipseLength4 = map(vocal, 0, 500, 20, 100);
ellipse(120, 400, 30, ellipseLength4);
let ellipseLength5 = map(vocal, 0, 500, 20, 100);
ellipse(380, 400, 30, ellipseLength5);
// outside square bewteen speaker 
fill(0),
strokeWeight(1);
rect(250, 400, 110, 120);
//middle rectangle 
strokeWeight(1);
rect(250, 390, 110, 70);
//small rect
stroke(27, 127, 120);
strokeWeight(1)
rect(250, 390, 80, 30);
//smallest rect
strokeWeight(1);
rect(250, 390, 25, 10);
//outside circle 
stroke(255, 72, 87);
strokeWeight(1);
circle(225, 390, 15, 5);
circle(275, 390, 15, 5);
//inside circle
circle(225, 390, 5, 5);
circle(275, 390, 5, 5);
//top part of radio
stroke(0, 204, 192);
strokeWeight(2);
rect(250, 240, 380, 50);
stroke(255, 72, 87);
strokeWeight(1);
fill(0);
circle(400, 260, 50, 100);
circle(400, 260, 35, 100);
//small buttons on the left top 
strokeWeight(1);
stroke(0, 204, 192);
rect(85, 225, 30, 5);
rect(85, 235, 30, 5);
rect(85, 245, 30, 5);
rect(85, 255, 30, 5);
//handle
strokeWeight(3);
stroke(27, 127, 120);
rect(250, 180, 350, 50);
rect(250, 187, 330, 35);
//circle buttons on the top half
strokeWeight(2);
circle(85, 285, 20, 120);
circle(125, 285, 20, 120);
circle(165, 285, 20, 120);
circle(205, 285, 20, 120);
circle(245, 285, 20, 120);
circle(285, 285, 20, 120);
rect(340, 286, 55, 20)
pop();
//music line
strokeWeight(1);
volhistory.push(bassMap);
stroke(255, 72, 88);
noFill();
beginShape();
for (var i = 0; i < volhistory.length; i++) {
  var y = map(volhistory[i], 0, 1, height / 8 , 0);
  vertex(i, y);

  ellipse(i, y, 0.1, 5);
}
endShape();
if (volhistory.length > width) {
  volhistory.splice(0, 1);
}
//song lyrics 
fill(0, 204, 190);
textFont('Verdana'); 
rectMode(CENTER)
textSize(50);
text(words, 370, 600);
}

