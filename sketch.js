var isKeyDown = false;
var cnv;
var px = 0,py = 0;

var drawing = [];
var database;

var dbdrawing = [];

function setup() {
   createCanvas(800,400);

   database = firebase.database();

  // cnv.mousePressed(clicked);
  // cnv.mouseReleased(released);
   
}

function draw() {
  background("yellow");
  readData();
  beginShape();
  noFill();
  for(var i in dbdrawing){
    vertex(dbdrawing[i].x,dbdrawing[i].y);
    endShape();
  }
    





  


}

function mouseDragged() {
  //console.log(mouseX);
  // if(px == 0 && py == 0){
  //   px = mouseX;
  //   py = mouseY;
  // } else{

  // }
  // line(px, py,mouseX, mouseY);
  var position = {x:mouseX,y:mouseY};

  drawing.push(position);

  database.ref("drawing").update({
    d:drawing
  })
  

  // prevent default
}


// function clicked(){
//   isKeyDown = true;
//   beginShape();
// }


// function released(){
//   isKeyDown = false;
//   endShape();
// }

function readData(){
  database.ref("drawing/").on("value",(data)=>{
    dbdrawing = data.val().d;
  })
}












