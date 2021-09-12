var currentDay = document.querySelector("#currentDay")
var timeBlock = document.querySelector(".container")
var time = document.querySelector("#hour")
var currentTime = document.querySelector("#hour")
var addTask = document.querySelector(".background")

$(currentDay).text(moment().format('LL'));

var currentTime = moment().format('H')
console.log(currentTime)

$(".background").each(function(){
   var hour = $(this).siblings(".hour").attr("id")
   console.log(hour)
   if (hour < currentTime){
       $(this).addClass("")
   }
   if(hour === currentTime){
       $(this).addClass("present")
   } 
   if (hour > currentTime){
       $(this).addClass("future")
   }
});

var addText = function(){
    var addIt = document.createElement('p')
    addIt.textContent = "new task"
    
}

    addTask.addEventListener("click",addText)

