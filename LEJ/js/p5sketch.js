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
    for (var i = 0; i < 208; i += 13) {
        line(50, i-110, 450, i-110);
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

        rect(x, -400, x + spacing, -400 - num1);

        textAlign(CENTER);
        fill(255);
        //text(parseInt(sensor), x + (spacing / 2), y + 10); //printing sensor value as int to avoid decimal places
        x += spacing;
        y += spacing;
    }
    noStroke();
    text("1", 500, 550);
    text("2", 505, 550);
    text("3", 510, 550);
    text("4", 505, 550);
    text("1", 615, y+35);
    text("2", 615, y+50);
    text("3", 615, y+75);
    text("4", 615, y+90);
    text("activity", 500, y+10);
    text("Urban Greening", 500,y+30);
    text("Community Stewardship", 500,y+50);
    text("Community Development", 500,y+70);
    text("Eco-Literacy", 500,y+90)
    text("# of Volunteers", 500, x);
}

function draw() {
    //nothing here
}
