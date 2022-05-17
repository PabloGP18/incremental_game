let clicks = 0;
let costJupiter = 15;
let costMars = 100;
let costSaturn = 500
let cursor = 0;

function incr(amount) {
    clicks = clicks + (amount);
    document.getElementById("clicks").innerText = clicks;
}

function buyJupiter() {
    if(clicks>=costJupiter){
        clicks = clicks - costJupiter;
        cursor = cursor +1;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costJupiter").innerText = costJupiter;
        document.getElementById("cursorJupiter").innerText = cursor;
    }
}

function buyMars() {
    if(clicks>=costMars){
        clicks = clicks - costMars;
        cursor = cursor + 5;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costMars").innerText = costMars;
        document.getElementById("cursorMars").innerText = cursor;
    }
}
function buySaturn() {
    if(clicks>=costSaturn){
        clicks = clicks - costSaturn;
        cursor = cursor + 10;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("costSaturn").innerText = costSaturn;
        document.getElementById("cursorSaturn").innerText = cursor;
    }
}

setInterval(function (){
    clicks = clicks + cursor
    document.getElementById("clicks").innerText = clicks;

},1000);

function reset() {
    clicks = 0
    cursor = 0
    document.getElementById("clicks").innerText = clicks
    document.getElementById("cursorSaturn").innerText = cursor;
    document.getElementById("cursorMars").innerText = cursor;
    document.getElementById("cursorJupiter").innerText = cursor;
}


