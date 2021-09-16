 //select element
 const dateTest = document.getElementById('date');
 const topScores = document.querySelector('p');
 const stopWatch = document.querySelector('#stopwatch');
 
 //make time array
 let scores = [];
 let second = 0;
 
 //making timer
 const timer = new Date();
 console.log(Date()); //prints date for testing.
 dateTest.innerHTML = timer;
 setInterval(myTimer, 1000); //sets interval
 
 //start timer function
 function timerStart() {
     clearInterval(timer);
     second += 10;
     stopWatch.innerHTML = second;
 }

 //myTimer function
 function myTimer() {
     const d = new Date();
     stopWatch.innerHTML = d.toLocaleTimeString();
 }

 function test(){
    let i;
    for (i = 0; i < 10; i++){
        console.table("index: " + i)
    }
}