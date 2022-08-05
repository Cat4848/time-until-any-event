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
        
            let dateDifference = new Date(eventDateObj.getTime() - Date.now());
    
            document.getElementById("days").innerHTML = dateDifference.getDate();
            document.getElementById("hours").innerHTML = dateDifference.getHours();
            document.getElementById("minutes").innerHTML = formatTime(dateDifference.getMinutes());
            document.getElementById("seconds").innerHTML = formatTime(dateDifference.getSeconds());
    
        }, 1000);
    } else {
        document.getElementById("name").innerHTML = "Please enter a date in the future"
    }
    console.log(eventDateObj.getTime())

 }

 function formatTime(time) {
    return time < 10 ? ("0" + time) : time;
 }
}


