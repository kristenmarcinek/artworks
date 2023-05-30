function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  textSize(200);
  fill('white');
  textAlign(CENTER);
  textWrap(WORD);
  text('BLACK', width / 2, height / 2 - 200);
  text('LIVES', width / 2, height / 2);
  text('MATTER', width / 2, height / 2 + 200);
  filter(BLUR, 15);

  text('BLACK', width / 2, height / 2 - 200);
  text('LIVES', width / 2, height / 2);
  text('MATTER', width / 2, height / 2 + 200);
}

function draw() {
  
}
