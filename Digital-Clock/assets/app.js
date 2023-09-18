console.log("Hello");




// Start & Stop Button
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");

let timer;
startBtn.addEventListener("click",()=>{
     timer = setInterval(digitalClock, 1000)
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(timer) 
})

// For Switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-button");

formatSwitchBtn.addEventListener("click", () =>{
    formatSwitchBtn.classList.toggle("active");

    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");  
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12");   
    }
});

function digitalClock() {
    const today = new Date();

    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    let period = "AM";

    //Set the time period
    if(hours >= 12){
        period = "PM";
    }

    // Set the clock format
    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;  
    }

    // ADD the 0 for the values lower than 10
    if(hours<10){
        hours = "0" + hours;
    }

    if(minutes<10){
        minutes = "0" + minutes;
    }

    if(seconds<10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML=hours
    document.querySelector(".minutes").innerHTML=minutes
    document.querySelector(".seconds").innerHTML=seconds
    document.querySelector(".period").innerHTML=period
   
}




const today2 = new Date()

const dayNum = today2.getDate()
const year = today2.getFullYear()
const dayName = today2.toLocaleString("default", {weekday: "long"})
const monthName = today2.toLocaleString("default", {month: "short"})

document.querySelector(".month-name").innerHTML= monthName
document.querySelector(".day-name").innerHTML= dayName
document.querySelector(".day-num").innerHTML= dayNum
document.querySelector(".year").innerHTML= year