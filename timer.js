let scores = [];
let startTime;
let endTime;

//start timer
function startTimer(){
    startTime = getTime();
    alert("timer started!");
}

//stop timer
    //add to array
function stopTimer(){
    endTime = getTime() - startTime;
    scores.push(endTime);
    console.table(scores);
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