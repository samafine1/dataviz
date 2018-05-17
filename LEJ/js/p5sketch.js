// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var activity;
var num;
var spacing = 25;
// let U = "Urban Greening"
// let C = "Community Stewardship"
// let D = "Community Development"
// let E = "Eco-Literacy"
// let A = "Urban Greening, Community Stewardship, Community Development"
// let B = "Urban Greening, Eco-Literacy"
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
        text(20 - (parseInt(i)), 30, i);
    }

    //iterate thorough all rows of CSV file
    for (var r = 1; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        activity = row.getNum(1);
        num = row.getNum(2);

        print(activity); //optional but helpful
        print(num);

        activity1 = map(activity/10000, 0, 50, 15, 255); //remap the time variable
        num1 = map(num/10000, 40, 15, 25, 450); //remap the sensor variable
        //look of ellipses
        fill(255, 100, activity1, 120); //time changes the fill color
        strokeWeight(1);
        stroke(activity1);

        rect(x, (-y/1000), x + spacing, (-y/1000) + num1);

        textAlign(CENTER);
        fill(255);
        //text(parseInt(sensor), x + (spacing / 2), y + 10); //printing sensor value as int to avoid decimal places
        x += spacing;
        y += spacing;
    }
    noStroke();
    text("activity", 30, y+10);
     text("# of Volunteers", 30, x);
}

function draw() {
    //nothing here
}
// Given the CSV file "data.csv"
// in the project's "assets" folder:

// var table;
// var row;
// var r = 0;
// var time;
// var sensor;

// function preload() {
//     //table is comma separated value "csv"
//     //and has no header specifying the columns labels
//     table = loadTable('assets/data.csv', 'csv', 'noHeader');
// }

// function setup() {
//     //setup look
//     createCanvas(600, 600);
//     ellipseMode(CENTER);
//     frameRate(1);       //control timing
//     background(50);
// }

// function draw() {

//     background(50,50);
//     if (r >= table.getRowCount()) { //if there is no more data return to top row
//         r = 0;
//         background(50);     //clear animation
//     }
//     row=table.getRow(r);
//     time = row.getNum(0);
//     sensor = row.getNum(1);

//     print(time); //optional but helpful
//     print(sensor);

//     time = map(time, 0, 50, 30, 255); //remap the time variable
//     sensor = map(sensor, 40, 30000, 25, 200); //remap the sensor variable
//     //look of ellipses
//     stroke(255 - time, time, 255);
//     strokeWeight(10);
//     fill(sensor, 255 - sensor, 255); //fill color determined by time

//     ellipse(width / 2, height / 2, sensor * 2, sensor * 2); //size determined by CSV data

//     noStroke();
//     textSize(30);
//     textAlign(LEFT);
//     text("Time " + parseInt(time), 10, (time*2)+20); 
//     text("Value " + parseInt(sensor), width-150, (time*2)+20); 

//     r++;

// }
