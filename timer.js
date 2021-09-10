// TODO:
//     [] get timer to display time
//     [] insert times into Array.
//     [x] display times in correct order

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
    // const topScoreLi = document.createElement('li');
    // topScoreLi.innerHTML = endTime;
    // leaderboard.appendChild(topScoreLi);
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

function sortTopScores(){
    scores.sort(function(a, b){return b - a});
    console.table(scores);

    // //add to array
    // const topScoreLi = document.createElement('li');
    // // topScoreLi.innerHTML = endTime;
    // for (i=0; i< scores.length; i ++){
    //     // leaderboard.appendChild(scores[i]); 
    //     topScoreLi.innerHTML = scores[i];
    // }
    // leaderboard.appendChild(topScoreLi);
    showLeader();
    
}

function showLeader(){
    //add to array
    const topScoreLi = document.createElement('li');
    // topScoreLi.innerHTML = endTime;
    for (i=0; i< scores.length; i ++){
        // leaderboard.appendChild(scores[i]); 
        topScoreLi.innerHTML = scores[i];
    }
    leaderboard.appendChild(topScoreLi);
}