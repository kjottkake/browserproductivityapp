const time = new Date();
console.log(time);

let startTime;

let minutes = time.getMinutes();
let seconds = time.getSeconds();

console.log("startTime: " + minutes + ":" + seconds)

startTime = (minutes * 60) + seconds;

console.log("Endtime: " + startTime)

let topScore = [];

topScore.push(startTime);
topScore.push(startTime);
topScore.push(startTime);

console.table(topScore);