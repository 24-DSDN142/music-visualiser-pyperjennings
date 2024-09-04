var volhistory = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let bassMap = map(bass, 0, 100, 0, 1);
volhistory.push(bassMap);
stroke(255);
for (var i = 0; i < volhistory.length; i++) {
  var y = map(volhistory[i], 0, 1, height, 0);
  point(i, y);

  ellipse(i, y, 3, 3);
  console.log(volhistory);
}




}
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