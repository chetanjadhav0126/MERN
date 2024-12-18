// DOM - Document Object Model

// 4 Pillar of DOM

// - Selection of an Element
// - Changing HTML
// - Changing CSS
// - Event Listener


// var h1 = document.querySelector("h1")
// console.log(h1)

// h1.innerHTML = "Changed"
// h1.style.color = "green"

// h1.addEventListener("click", function(){
//     h1.innerHTML = "Hello World"
//     h1.style.color = "aqua"
//     h1.style.backgroundColor = "purple"
//     console.log("These are the 4 pillars of DOM")
// })





//Performing event
// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         flag = 1
//         console.log("Clicked")
//     }else{
//         bulb.style.backgroundColor = "white"
//         flag = 0
//         console.log("Again Clicked")
//     }
// })





//Multiple element selector
// var p = document.querySelectorAll("p")

// p.forEach(function(p){
//     console.log(p)
// })





// element selector

// var green = document.getElementById("green")
// green.innerHTML = "This is a ID Selector"

// var red1 = document.getElementsByClassName("red1")
// red1.innerHTML = "This is class selector"




var green = document.getElementById("green")
// green.innerHTML = "<h1>Hello World</h1>"     //It wirtes the content inside the tag
green.textContent = "<h1>Hello World</h1>"      //It wirtes the content as it is 

