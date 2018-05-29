// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var r = 0;
var time;
var sensor;
var spacing=25;

function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable('assets/data.csv', 'csv', 'noHeader');
}

function setup() {
    //setup look
    createCanvas(1000, 600);
    frameRate(1);       //control timing
    background(50);
}

function draw() {

    background(50,50);
    if (r >= table.getRowCount()) { //if there is no more data return to top row
        r = 0;
        background(50);     //clear animation
    }
    row=table.getRow(r);
    time = row.getNum(0);
    sensor = row.getNum(1);

    print(time); //optional but helpful
    print(sensor);

    //look of ellipses
    stroke(255 - time, time, 255);
    strokeWeight(10);
    fill(150, 155, 255); //fill color determined by time
    ellipse(65 + spacing, height/2, 10*sensor, 10*sensor); //size determined by CSV data
    spacing = spacing +35
    noStroke();
    textSize(30);
    textAlign(LEFT);
    text("Date (1.2 translates to 1/2/2018)" , 10, 30); 
    text("# of Volunteers ", 10, 70); 
    textSize(15);
    text(time,20+spacing,265);
    text(sensor + "v",20+spacing,330);
 

    r++;

}
