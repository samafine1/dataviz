// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var time;
var sensor;
var spacing = 25;
let U = "Urban Greening"
let C = "Community Stewardship"
let D = "Community Development"
let E = "Eco-Literacy"
let A = "Urban Greening, Community Stewardship, Community Development"
let B = "Urban Greening, Eco-Literacy"

var x;
var y;

function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable('assets/data.csv', 'csv', 'noHeader');
}

function setup() {
    //setup look
    createCanvas(1000, 600);
    background(200, 50, 240);
    rectMode(CORNERS);
    //location variables

    x = 50;
    y = height - 50;

    //draw graph lines
    stroke(255);
    for (var i = 20; i < y; i += 10) {
        line(30, i, 500, i);
        text(540000 - (parseInt(i))*1000, 30, i);
    }

    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        time = row.getNum(0);
        sensor = row.getNum(1);

        print(time); //optional but helpful
        print(sensor);

        time = map(time/10000, 0, 50, 15, 255); //remap the time variable
        sensor = map(sensor/10000, 40, 15, 25, 450); //remap the sensor variable
        //look of ellipses
        fill(255, 100, time, 120); //time changes the fill color
        strokeWeight(1);
        stroke(time);

        rect(x, (-y/1000), x + spacing, (-y/1000) + sensor);

        textAlign(CENTER);
        fill(255);
        //text(parseInt(sensor), x + (spacing / 2), y + 10); //printing sensor value as int to avoid decimal places
        x += spacing;
        y += spacing;
    }
    noStroke();
    text("Activity", 30, y+10);
     text("# of Volunteers", 30, x);
}

function draw() {
    //nothing here
}
