//This can be shown in console tab of developers tools
// console.log("Hello Guysss")
// console.warn("This is warning")
// console.error("This is error")






//Pop Up's
// alert("This is an alert message")

// var ans  = confirm("Are you an Adult?")
// console.log(ans)

// var a = prompt("Enter your name") //getting an input in pop up
// console.log("Username is ",a)







// Functions
// function abc(  ){
//     console.log("This is a function")
// }


// var abc2 = function(){
//     console.log("This is method of writling a function as a variable ")
// }

// var abc3 = () =>{
//     console.log("This is another method of writing a function")
// }

// abc()
// abc2()
// abc3()




// () = Functions
// {} = Objects
// [] = Arrays





//Arrays 
// var arr = [10, "String", 16.90, true, "OK"]
// console.log(arr)

// console.log(arr[2])

// arr.push(99)
// console.log(arr)

// arr.pop()
// console.log(arr)

// console.log(arr.length)


// arr.forEach(function(num){
//     console.log("hello", num)
// })





//Objects

// var obj1 = {
//     model : "One Plus",
//     price : 30,
//     color : "Blue"
// }

// var obj2 = {
//     model : "Apple",
//     price : 150,
//     color : "Black"
// }

// console.log(obj1)
// console.log(obj2.model)


// // function inside an Object
// var obj3 = {
//     userName : "Harry",
//     age : 27,
//     greet:function(){
//         console.log("Good Morning")
//     }
// }

// console.log(obj3.userName)
// console.log(obj3.greet())   //It execute with a undefined because it does not return anything 
// obj3.greet()                //It does not return the undefined because the function is called directly (not in console.log())





// Array of objects
var obj = [
    10,
    {user:"Harsh", age:19},
    {user:"Sahil", age:20},
    {user:"Sunny", age:18},
    23.98,
    true,
    "Hello"
]

console.log(obj)
console.log(obj[4])
console.log(obj[2].user)

