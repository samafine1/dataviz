// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var activity;
var num;
var spacing = 25;
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
    background(180);
    rectMode(CORNERS);

    //location variables
    x = 50;
    y = 50;

    //draw graph lines
    stroke(255);
    for (var i = 0; i < 25; i += 1) {
        line(50, i+1000, 500, i+1000);
        text(i, 1030, i);
    }

    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        num = row.getNum(0);

    //optional but helpful
        print(num);

        num1 = map(num, 0, 50, 15, 255); //remap the num of volunteers
        //look of ellipses
        fill(255, 100, num1, 120); //time changes the fill color
        strokeWeight(1);
        stroke(num1);

        rect(x, (y/1000), x + spacing, (y/1000) + num1);

        textAlign(CENTER);
        fill(255);
        //text(parseInt(sensor), x + (spacing / 2), y + 10); //printing sensor value as int to avoid decimal places
        x += spacing;
        y += spacing;
    }
    noStroke();
    text("activity", 100, y+10);
     text("# of Volunteers", 100, x);
}

function draw() {
    //nothing here
}
