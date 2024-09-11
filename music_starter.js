var volhistory = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);
  fill(0, 204, 190);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(50);
  text(words, 370, 600);
  let bassMap = map(bass, 0, 100, 0, 1);
  // console.log(counter + " " + words);



push();
translate(200, 0);
//base of the radio
fill(0);
strokeWeight(3);
stroke(27, 127, 120); 
rect(250, 350, 400, 290);
rect(250, 420, 400, 220);
//speaker of the radio
//large circles
stroke(255, 72, 88)
fill(255, 72, 88);
let ellipseLength = map(other, 0, 55, 20, 100)
ellipse(380, 400, 130, ellipseLength);
let ellipseLength1 = map(other, 0, 55, 20, 100)
ellipse(120, 400, 130, ellipseLength);
//small circles
fill(27, 127, 120);
stroke(27, 127, 120);
let ellipseLength2 = map(drum, 0, 150, 20, 100)
ellipse(380, 400, 60, ellipseLength2);
let ellipseLength3 = map(drum, 0, 150, 20, 100)
ellipse(120, 400, 60, ellipseLength3);
//small circle 
fill(0, 204, 190);
stroke(0, 204, 190);
let ellipseLength4 = map(vocal, 0, 500, 20, 100);
ellipse(120, 400, 30, ellipseLength4);
let ellipseLength5 = map(vocal, 0, 500, 20, 100);
ellipse(380, 400, 30, ellipseLength5);
//outside square with buttons 
fill(0),
strokeWeight(1);
rect(250, 400, 110, 120);
//med-larg rect
strokeWeight(1);
rect(250, 390, 110, 70);
//medium rect
stroke(27, 127, 120);
strokeWeight(1)
rect(250, 390, 80, 30);
//small rect
strokeWeight(1);
rect(250, 390, 25, 10);
//medium circle
stroke(255, 72, 87);
strokeWeight(1);
circle(225, 390, 15, 5);
circle(275, 390, 15, 5);
//small circle
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
//small buttons
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
//buttons on the top 
strokeWeight(2);
circle(85, 285, 20, 120);
circle(125, 285, 20, 120);
circle(165, 285, 20, 120);
circle(205, 285, 20, 120);
circle(245, 285, 20, 120);
circle(285, 285, 20, 120);
// circle(325, 285, 20, 120);
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
  // console.log(volhistory);
}
endShape();


if (volhistory.length > width) {
  volhistory.splice(0, 1);
}

// // stroke(255, 0, 0);

// line(volhistory.length, 0, volhistory.length, height);



}

// //radio base
// strokeWeight(8);
// stroke(247, 215, 246);
// rect(250, 350, 300, 170);
// strokeWeight(4);
// stroke(250, 170, 248);
// rect(250, 350, 300, 170);
// strokeWeight(2);
// stroke(247, 79, 242);
// rect(250, 350, 300, 170);


// let rectLength = map(vocal, 0, 100, 0, 300);
// rect(250, 380, 75, rectLength);
// strokeWeight(4);
// stroke(247, 215, 246)
// let ellipseLength = map(drum, 0, 100, 20, 100)
// ellipse(160, 350, 100, ellipseLength);
// let ellipseLength1 = map(drum, 0, 100, 20, 100)
// ellipse(340, 350, 100, ellipseLength);

//radio details 
fill(247, 79, 242)
stroke(250, 170, 248);
circle(120, 420, 10, 150)
circle(380, 420, 10, 150)
stroke(250, 170, 248);
circle(120, 280, 10, 150)
circle(380, 280, 10, 150)

//radio insert
strokeWeight(2.5);
stroke(250, 170, 248);
fill(247, 215, 246);
rect(250, 380, 75, 30);

// stroke(101, 202, 252);
// rect(250, 380, 60, 35);

stroke(250, 170, 248);
circle(235, 380, 10, 150)
circle(265, 380, 10, 150)







// //radio speakers 
// strokeWeight(6);
// stroke(255, 36, 251);
// circle(160, 350, 100, 100)
// circle(340, 350, 100, 100)

// strokeWeight(2);
// stroke(230, 2, 226);
// circle(160, 350, 100, 100)
// circle(340, 350, 100, 100)

// stroke(101, 202, 252);
// circle(160, 350, 75, 100)
// circle(340, 350, 75, 100)

// stroke(194, 35, 247);
// circle(160, 350, 30, 100)
// circle(340, 350, 30, 100)

// //radio insert
// stroke(194, 35, 247);
// fill(194, 35, 247);
// rect(250, 380, 75, 50);
// stroke(101, 202, 252);
// rect(250, 380, 60, 35);
// stroke(194, 35, 247);
// circle(235, 380, 10, 150)
// circle(265, 380, 10, 150)

// //radio details 
// stroke(255, 36, 2517);
// circle(120, 420, 10, 150)
// circle(380, 420, 10, 150)
// stroke(255, 36, 251);
// circle(120, 280, 10, 150)
// circle(380, 280, 10, 150)









// ellipse(200, 350, 300, bass * 20);

// fill(45, 190, 252);
// ellipse(250,210, 400, 400);
// fill(235, 52, 52);
// let rectLength = map(vocal, 0, 100, 0, 300);
// rect(250, 250, 150, rectLength);

// let ellipseLength = map(bass, 0, 100, 20, 100);
// ellipse(150, 100, 100, ellipseLength);

// let ellipseLength1 = map(bass, 0, 100, 20, 100);
// ellipse(350, 100, 100, ellipseLength1);

// let ellipseLength = map (vocal, 0, 100, 20, 100)
// ellipse(350,100,100,ellipseLength);
// fill(45, 190, 252)
// ellipse(250, 210, 400, 400);
// fill(235, 52, 52)
// let rectLength = map(vocal, 0, 100, 0, 300);
// rect(250, 250, 150, rectLength);


// let ellipseLength = map(bass,0, 100, 20, 100)
// ellipse(150,100,100,ellipseLength);

// let ellipseLength1 = map(bass,0, 100, 20, 100)
// ellipse(350, 100, 100, ellipseLength1);


// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;

// bar_pos_x, height / 2 + 4 * bar_spacing + 8;
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }