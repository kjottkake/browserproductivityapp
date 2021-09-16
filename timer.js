// TODO:
//     [] get timer to display time
//     [x] insert times into Array.
//     [x] display times in correct order
//     [] Add miliseconds

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
    endTime = getTime() - startTime; //gets endTime via subtracting from getTime function
    scores.push(endTime);   //puts endtime into scores
    console.table(scores); //test output
    sortTopScores();
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

function resetScores(){
    leaderboard.remove(); //once runs doesn't allow adding to li via DOM <-needs to be fixed.
}

function sortTopScores(){
    scores.sort(function(a, b){return b - a});
    console.table(scores);

    for (i = 0; i < scores.length; i++){
    const topScoreLi = document.createElement('li');
    topScoreLi.innerHTML = scores[i];
    leaderboard.appendChild(topScoreLi);
    }
    
    // updateLeader();
}

// function updateLeader(){
//     //add to array
//     const topScoreLi = document.createElement('li');
//     // topScoreLi.innerHTML = endTime;

//     // for (i=0; i< scores.length; i ++){
//     //     topScoreLi.innerHTML = scores[i];
//     //     leaderboard.appendChild(topScoreLi);
//     // }
//     topScoreLi.innerHTML = scores;
//     leaderboard.appendChild(topScoreLi);
// }