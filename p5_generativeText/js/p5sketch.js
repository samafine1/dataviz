var articles = ["a", "the", "some", "more than one", "exactly one", "a quantity of"];
var locations = ["inside", "close to", "with", "beside", "near", "far from", "at", "above", "around"];
var nouns = ["dog", "cat", "hamster", "toad", "woman", "man", "rat", "elephant", "police", "teacher", "American"];
var nouns2 = ["goat", "fish", "shark", "bird", "child", "baby", "snake", "yak", "llama", "clam", "slug"];
var verb = ["eat", "nibble", "play", "lounge", "complain", "love", "snuggle", "sing", "dance", "howl", "cry", "faint", "bleed"];
var action = ["can", "did", "will", "might", "may", "can't", "didn't", "will never", "could"];
var frequency = ["on Friday", "sometimes", "never", "way too often", "on occasion", "if the timing is right", "on Wednesday", "in October", "at 5:30pm"];
var punctuation = ["?", "!", "!!!", "."];

function setup() {
    //setup look
    createCanvas(1200, 600);
    background(30);
    textSize(25);

    fill(255);
    textAlign(LEFT,CENTER);
    text("storytime", width/2, 30);

    for (var i = 0; i < 400; i += 30) {
        fill(255, i, 255);
        text(articles[parseInt(random(articles.length))] + " " +
        nouns[parseInt(random(nouns.length))] + " " +
        action[parseInt(random(action.length))] + " " +
        verb[parseInt(random(verb.length))] + " " +
        locations[parseInt(random(locations.length))] + " " +
        articles[parseInt(random(articles.length))] + " " +
        nouns2[parseInt(random(nouns2.length))] + " " +
        frequency[parseInt(random(frequency.length))] + " " +
        punctuation[parseInt(random(punctuation.length))],10,100+i,1200);
    }
}

function draw() {
    //nothing here
}
