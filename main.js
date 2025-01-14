
// THE STOPWATCH 
const timeDisplay = document.querySelector("#timeDisplay"); // selects the time display and saves it as a constant for us to draw on 

// the buttons
const startBtn = document.querySelector("#startBtn"); // selects the time display and saves it as a constant for us to draw on 
const pauseBtn = document.querySelector("#pauseBtn"); // selects the time display and saves it as a constant for us to draw on 
const resetBtn = document.querySelector("resetBtn"); // selects the time display and saves it as a constant for us to draw on 

// setting the default times
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0; 
let paused = true; // boolean variable
let intervalId;

let hrs = 0;
let mins = 0;
let secs = 0;

// when the user clicks the button x happens
startBtn.addEventListener("click", () => {
    // check to see if paused = true
    if(paused) {
        paused = false; 
        startTime = Date.now() - elapsedTime; // will give the current date and time in milliseconds

        // begin timer
        intervalId = setInterval(updateTime, 75);
    }
});

pauseBtn.addEventListener("click", () => {});
resetBtn.addEventListener("click", () => {});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    // adds 0 before number so that it looks like real stopwatch
    function pad(unit) {
        return(("0") + unit).length > 2 ? unit: "0" + unit;
    }
}