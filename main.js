img ="";
status = "";
objects = [];

function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status Detecting Object"; 
}

function draw() {
image(img, 0, 0, 640, 420);

if (status != "")
{
for (var i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "status : Object Detected";
fill("#10e7eb");
console.log("Object Detected");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#ff0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
/* fill("#10e7eb")
text("Dog", 45, 75);
noFill();
stroke("#ff0000")
rect(30, 60, 450, 350 );

fill("#000000")
text("Cat", 320, 120);
noFill();
stroke("#000000");
rect(300, 90, 270, 320 ); */
}

function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if (error) {
console.log(error);
}
console.log(results);
objects = results;
}

