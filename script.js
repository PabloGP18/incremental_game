let clicks = 0;

function incr(amount) {
    clicks = clicks + (amount);
    document.getElementById("clicks").innerText = clicks;
}
function reset() {
    clicks = 0
    document.getElementById("clicks").innerText = clicks
}


