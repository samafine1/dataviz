// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var activity;
var num;
var spacing = 25;
var x;
var y;
var y1 = 50

function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable('assets/data.csv', 'csv', 'noHeader');
}

function setup() {
    //setup look
    createCanvas(1000, 600);
    background(180);

    //location variables
    x = 50;
    y = 50;

    //draw graph lines
    stroke(255);
    for (var i = 0; i < 300; i += 20) {
        line(50, i+200, 450, i+200);
        text(28-i/10, 460, i+200);
    }

    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        num = row.getNum(0);
        act = row.getString(1)

    //optional but helpful
        print(num);

        num1 = map(num, 0, 50, 15, 255); //remap the num of volunteers
        //look of ellipses
        fill(255, 100, num1, 120); //time changes the fill color
        strokeWeight(1);
        stroke(num1);

        rect(2*x, 480-num1, 50, num1);
        textAlign(CENTER);
        fill(255);
        //text(parseInt(sensor), x + (spacing / 2), y + 10); //printing sensor value as int to avoid decimal places
        x += spacing;
        y += spacing;
        y1 = 25 + y1;
            noStroke();
        text(act, 500, y1+10);
    }
    text("1", 2*x-25, 600);
    text("2", 2*x-25, 600);
    text("3", 2*x-25, 600);
    text("4", 2*x-25, 600);
    text("1", 515, y1+10);
    text("2", 515, y1+10);
    text("3", 515, y1+10);
    text("4", 515, y1+10);
    r++
}

function draw() {
    //nothing here
}
