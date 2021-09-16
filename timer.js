// TODO:
//     [X] get timer to display time
//     [x] Get timer to stop display time when stop button is pressed
//     [x] insert times into Array.
//     [x] display times in correct order
//     [] Add miliseconds

const leaderboard = document.getElementById('topScore');
const watch = document.querySelector("#stopwatch");

let scores = [];
let startTime;
let endTime;

//defines variables copied from stopwatch.js
let millisecondSW = 0;
let timerSW;
let secondSW = 0;


//start timer
function startTimer(){
    startTime = getTime();
    console.log("started timer!");

    timerSW = setInterval(() => {
        millisecondSW += 10;
        let dateTimer = new Date(millisecondSW);

        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
}

//stop timer
    //add to array
function stopTimer(){
    endTime = getTime() - startTime; //gets endTime via subtracting from getTime function
    scores.push(endTime);   //puts endtime into scores
    console.table(scores); //test output
    clearInterval(timerSW);
    setInterval(timerSW);
    millisecondSW = 0;
    watch.innerHTML = "00:00:00:00";
    // sortTopScores();
}


//get time function
function getTime(){
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    // let miliseconds = time.getMilliseconds();
    let currentTimeInSeconds = ((hour * 60) + (minute * 60) + second);
    return currentTimeInSeconds;
}

function resetScores(){
    leaderboard.remove(); //once runs doesn't allow adding to li via DOM <-needs to be fixed.
}

//function sorts topscores.
function sortTopScores(){
    scores.sort(function(a, b){return b - a});
    console.table(scores);

    //doesn't replace old scores.
    for (i = 0; i < scores.length; i++){
    const topScoreLi = document.createElement('li');
    topScoreLi.innerHTML = scores[i];
    leaderboard.appendChild(topScoreLi);
    }
    
}

