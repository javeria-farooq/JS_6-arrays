//     // length & indices of arrays:

/* let marks = [92, 85, 38, 67, 45]
let nationalHeroes = ["Quaid", "Iqbal", "Liaquat"]
console.log(nationalHeroes)
console.log(marks)
console.log(marks[2])
console.log("Length of marks = ", marks.length)
console.log("Length of National Heroes = ", nationalHeroes.length)
marks[2] = "ali khan"
console.log(marks)
console.log(marks[2] = "Ali khan") */

//    // for loop:

/* let nationalHeroes = ["Quaid", "Iqbal", "Liaquat"]
console.log(nationalHeroes)
for(let i = 0; i < nationalHeroes.length; i++) {
    console.log(nationalHeroes[i])
} */

//   // while loop:

/* let nationalHeroes = ["Quaid", "Iqbal", "Liaquat"]
let i = 0;
while(i < nationalHeroes.length) {
    console.log(nationalHeroes[i])
    i++
} */

//   // do-while thk trhn se yhn nh chlega

//  // for-of loop:

/* let cities = ["Karachi", " Islamabad", "Faisalabad", "Lahore", "Afghanistan"]

for(let city of cities) {
    console.log(city)
} */

//     // for-in loop:
/* let cities = ["Karachi", "Islamabad", "Faisalabad", "Lahore", "Afghanistan"]
for(let city in cities) {
    console.log(cities[city])
} */



//    //         // practice questions:
// qno:1

/* let marks = [85, 97, 44, 37, 76, 60]
// console.log(marks.length)

let sum = 0

for(let val of marks) {
    sum += val
}

let avgMarks = sum / marks.length

console.log(`Average marks of the class = ${avgMarks}`) */

// qno:2
// let prices = [250, 645, 300, 900, 50]

/* let i = 0
for(let val of prices) {
   let offer = val / 10
   prices[i] = prices[i] - offer
   console.log(`price of item is after offer = ${prices[i]}`)
   i++
} */

/* for(let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10
    prices[i] = prices[i] - offer
    console.log(`price of item is after offer = ${prices[i]}`)
} */

//     //    /////  array methods:

// push: // changes an original array

// let foodItems = ["Biryani", "Apple", "Beef roll"]
/* console.log(foodItems)
foodItems.push("Mango", "Dates", "Strawberry")
console.log(foodItems) */

//pop:  / change an original array

// let foodItems = ["Biryani", "Apple", "Beef roll"]
/* foodItems.pop()
console.log(foodItems) */

// toString:  / doesnot change an original array

/* let newItems = foodItems.toString()
console.log(newItems)
console.log(foodItems) */

/* let marks = [90, 34, 87, 68, 49]
let newMarks = marks.toString()
console.log(newMarks)
console.log(marks) */

// concat:  / doesnot change an original array

/* let accessories = ["android", "ipad", "iphone", "tablet"]
let newAccessories = ["laptop", "computer", "apple"]

let allAccessories = accessories.concat(newAccessories)
console.log(allAccessories)
console.log(accessories)
console.log(newAccessories) */

// unshift(like the push method): / changes an original array

/* let foodItems = ["Biryani", "Apple", "Beef roll"]
console.log(foodItems)
foodItems.unshift("ice-cream", "dahi-barre", "chat", "aloo kay samosay")
console.log(foodItems) */

// shift(like the push method): / changes an original array

/* let foodItems = ["Biryani", "Apple", "Beef roll"]
console.log(foodItems)
foodItems.unshift("ice-cream", "dahi-barre", "chat", "aloo kay samosay")
console.log(foodItems)
let val = foodItems.shift()
console.log(foodItems)
console.log(`deleted ${val}`) */

// slice: / doesnot change an original array

/* let foodItems = ["Biryani", "Apple", "Beef roll", "ice-cream", "dahi-barre", "chat", "aloo kay samosay"]
console.log(`before application array = ${foodItems}`)
let newItem = foodItems.slice(0, 3)
console.log(`after application array = ${foodItems}`)
console.log(`new array = ${newItem}`) */

// splice: / changes an original array

let foodItems = ["kachoriyan", "ice-cream", "dahi-barre", "chat", "aloo kay samosay"]

/* console.log(`before splice, food items = ${foodItems}`)
foodItems.splice(1, 1, "Biryani", "karai", "tikka roll")
console.log(`after splice, food items = ${foodItems}`) */

// add element:
/* console.log(foodItems)
foodItems.splice(4, 0, "fruit chat")
console.log(foodItems) */

// delete element:
/* console.log(foodItems)
foodItems.splice(1, 1)
console.log(foodItems) */

// replace element:
/* console.log(foodItems)
foodItems.splice(3, 1, "fruit chat")
console.log(foodItems) */

// splice(missing parameters):
/* console.log(foodItems)
let newF = foodItems.splice(2)
console.log(foodItems)
console.log(`deleted ${newF}`) */



//    ///    // practice questions:
// qno:1
/* let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies)
//a
companies.shift()
console.log(companies)

// b
companies.splice(1, 1, "ola")
console.log(companies)

//c
companies.push("Amazon")
console.log(companies) */