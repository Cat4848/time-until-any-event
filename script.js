window.onload =  function(){

let calculate = document.getElementById("calculate");

calculate.onclick = function(){

    let userName = document.getElementById("userName").value;

    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    let eventName = document.getElementById("eventName").value;    

    
    let eventDate = document.getElementById("eventDate").value;
    let eventDateObj = new Date(eventDate);

        if (eventDateObj.getTime() > Date.now()) {


        document.getElementById("name").innerHTML = "Hello " + userName + "!";
        document.getElementById("event").innerHTML = "Your " + eventName + " will be in";

        document.getElementById("daysSpan").innerHTML = "days";
        document.getElementById("hoursSpan").innerHTML = "hours";
        document.getElementById("minutesSpan").innerHTML = "minutes";
        document.getElementById("secondsSpan").innerHTML = "seconds";

              
        setInterval(function(){
            let dateDifferenceInSeconds = new Date (eventDateObj.getTime() - Date.now());
            let secondsDiff = dateDifferenceInSeconds / 1000;

            let days = Math.floor((secondsDiff / 3600) / 24);
            let hours = Math.floor(secondsDiff / 3600) % 24; 
            let minutes = Math.floor((secondsDiff / 60) % 60);
            let seconds = Math.floor(secondsDiff) % 60;
        
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
    
            console.log(days, hours, minutes, seconds);

    
        }, 1000);
    } else {
        document.getElementById("name").innerHTML = "Please enter a date in the future"
    }
    
 }

 function formatTime(time) {
    return time < 10 ? ("0" + time) : time;
 }
}