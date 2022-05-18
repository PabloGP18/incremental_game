// variable for the clicks
let clicks = 0;
// variable for the extra clicks
let extraClicks= 1;
// variable for the clicks per second
let clicksPerSecond = 0;
// variables for the different planets and sun
let costJupiter = 15;
let costMars = 100;
let costSaturn = 500
let costSun = 1000;
// variables for the cursors (levels) of the different planets and sun
let cursorJupiter = 0;
let cursorMars = 0;
let cursorSaturn = 0;
let cursorSun = 0;

// function how to increment the clicks with your extra click when you buy a planet
function incr() {
    clicks += extraClicks;
    document.getElementById("clicks").innerText = clicks;
}

//function how to buy a planet
function buyJupiter() {
    if(clicks>=costJupiter){// if clicks is more or equal to costplanet you can buy
        clicks = clicks - costJupiter;// how to decrease your cost from buying a planet of your clicks
        cursorJupiter++;// incrementing level jupiter
        costJupiter *=2;// double the cost of buying Jupiter
        extraClicks +=1;// multiplying the clicks every time you buy jupiter
        // how to show your new results in html
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costJupiter").innerText = costJupiter;
        document.getElementById("cursorJupiter").innerText = cursorJupiter;
    }else{
        alert("Not enough clicks..... Click some more!!!")
    }
}
// same function as above, just different planet
function buyMars() {
    if(clicks>=costMars){
        clicks = clicks - costMars;
        cursorMars++;
        costMars *=2;
        extraClicks +=3;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costMars").innerText = costMars;
        document.getElementById("cursorMars").innerText = cursorMars;
    }else{
        alert("Still not enough clicks..... Click some more!!!")
    }
}
// same function as above, just different planet
function buySaturn() {
    if(clicks>=costSaturn){
        clicks = clicks - costSaturn;
        cursorSaturn++;
        costSaturn *=2;
        extraClicks +=7;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costSaturn").innerText = costSaturn;
        document.getElementById("cursorSaturn").innerText = cursorSaturn;
    }else{
        alert("Please..... Click some more!!!")
    }
}
function buySun() {
    if(clicks>=costSun){
        clicks = clicks - costSun;
        cursorSun++;
        costSun *=2;
        clicksPerSecond +=1; // doing plus to the click per second counter and also in your total amount of clicks (+1 every second @ cursor/level 1)
        document.getElementById("clickPerSecond").innerText = clicksPerSecond; // updating counter clicks per second
        document.getElementById("costSun").innerText = costSun;
        document.getElementById("cursorSun").innerText = cursorSun;
    }else{
        alert("Don't burn yourself and..... Click some more!!!")
    }
}
// function interval to auto increment
setInterval(function (){
    clicks = clicks + clicksPerSecond; // adding clicks per second to the total clicks
    document.getElementById("clicks").innerText = clicks;
},1000);

// function how to reset all the functions and counter of the html
function reset() {
    // putting al variables to their original state
    clicks = 0;
    extraClicks = 1;
    cursorJupiter = 0;
    cursorMars = 0;
    cursorSaturn = 0;
    cursorSun = 0;
    clicksPerSecond = 0;
    let costJupiter = 15 + " clicks";
    let costMars = 100 + " clicks";
    let costSaturn = 500 + " clicks";
    let costSun = 1000 + " clicks";
    // how to put all the variables in their original state in html
    document.getElementById("clicks").innerText = clicks
    document.getElementById("cursorSaturn").innerText = cursorSaturn;
    document.getElementById("cursorMars").innerText = cursorMars;
    document.getElementById("cursorJupiter").innerText = cursorJupiter;
    document.getElementById("cursorSun").innerText = cursorSun;
    document.getElementById("costSaturn").innerText = costSaturn;
    document.getElementById("costJupiter").innerText = costJupiter;
    document.getElementById("costMars").innerText = costMars;
    document.getElementById("costSun").innerText = costSun;
    document.getElementById("clickPerSecond").innerText = clicksPerSecond;
}




