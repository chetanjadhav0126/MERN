//forEach loop
const names = ["John", "Sarah", "Michael", "Sahil", "David", "Sushant"]

// names.forEach(function(name){
//     if(name == "Michael"){}
//     else{
//         console.log(name)
//     }
// })







//map function    - It is used to create a new array by applying a function to each element of the original array.  
// let newarr = names.map(function(name){
//     return name + " ji"
// })
// console.log(newarr)







//filter function - It is used to create a new array by filtering elements of the original array based on a condition.
// let newarr = names.filter(function(name){
//     return name.startsWith("S")
// })

// console.log(newarr)






//destructuring - It is used to extract values from an array or object and assign them to variables.
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zipCode: "10001"
//     },
//     phoneNumbers: {
//         home: "212-555-1234",
//         mobile: "917-555-5678"
//     },
//     isEmployed: true,
//     hobbies: ["reading", "hiking", "photography"],
//     education: {
//         degree: "Bachelor's",
//         major: "Computer Science",
//         university: "State University",
//         graduationYear: 2015
//     }
// };

// // Example of destructuring the user object
// const { firstName, lastName, age, address: { city }, hobbies } = user;
// console.log(firstName); // John
// console.log(city); // New York
// console.log(hobbies[0]); // reading
// console.log(education.degree)







//Spread - It is used to spread the elements of an array or object into individual elements.
// let newarr = [...names]
// console.log(newarr)

// const person = {
//     name: "Alice",
//     age: 25,
//     city: "Boston"
// };
// let newperson = {...person}
// console.log(newperson)







//rest - It is used to collect the remaining elements of an array or object into a new array or object.
// function num(a,b,...others){
//     console.log(a,b,others)
// }
// num(1,2,3,4,5,6,7,8,9,10)





//Questions

//1 Merging two arrays and removing duplicates
// let arr1 = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7]
// let newarr = [...arr1, ...arr2]
// console.log(newarr)


//2 Filtering an array of products based on category
// const products = [
//     {name: "Laptop", type:"Electronics"},
//     {name: "Headphones", type:"Electronics"},
//     {name: "Coffee Maker", type:"Appliances"},
//     {name: "Running Shoes", type:"Sports"}
// ]

// let newarr = products.filter(function(product){
//     return product.type == "Electronics"
// })
// console.log(newarr) 



//3 Mapping over an array of user data to create a list of user cards
// const users = [
//     {name: "John", age: 25},
//     {name: "Jane", age: 30},
//     {name: "Jim", age: 35},
//     {name: "Jill", age: 40}
// ] 

// let newarr = users.map(function(user){
//     return `<div>${user.name} - ${user.age}</div>`
// })
// console.log(newarr)


//4 Grouping an array of objects by a property
const users = [
    {name: "John", age: 25, role: "admin"},
    {name: "Jane", age: 30, role: "user"},
    {name: "Jim", age: 35, role: "admin"},
    {name: "Jill", age: 40, role: "user"}
]

let newuser1 = []
let newuser2 = []
users.filter(function(user){
    if(user.role == "admin"){
        return newuser1.push(user)
    }
    else{
        return newuser2.push(user)
    }
})
console.log(newuser1)
console.log(newuser2)