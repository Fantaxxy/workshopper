const fruits = ["Grapes", "Bannana", "Kiwi", "Lime", "Grapefruit", "Avacado"]
// Display the number of fruits in the array
console.log(fruits.length)
// Display the 4th fruit in the array
console.log(fruits[3])
// Replace Bannana with Blueberry at the same location
fruits.splice(1, 1, "Blueberries")
console.log(fruits)
// pull last fruit out
firstFruit = fruits.pop()
console.log(firstFruit)