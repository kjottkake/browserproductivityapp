// TODO:
//     [] get timer to display time
//     [] insert times into Array.
//     [] display times in correct order

const leaderboard = document.getElementById('topScore');

let scores = [];
let startTime;
let endTime;

//start timer
function startTimer(){
    startTime = getTime();
    console.log("started timer!");
}

//stop timer
    //add to array
function stopTimer(){
    endTime = getTime() - startTime;
    scores.push(endTime);   //puts endtime into scores
    console.table(scores); //test output
    const topScoreLi = document.createElement('li');
    topScoreLi.innerHTML = endTime;
    leaderboard.appendChild(topScoreLi);
}


//get time function
function getTime(){
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let currentTimeInSeconds = ((hour * 60) + (minute * 60) + second);
    return currentTimeInSeconds;
}