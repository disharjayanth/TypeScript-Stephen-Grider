let apple = 10

let speed: string = "fast"

let hasName: boolean = true

let nothingMuch: null = null

let nothing: undefined = undefined

// built in object
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'blue', 'purple', 'green']

// Array of numbers
let myNumbers: number[] = [1, 2, 3, 4]

// Array of boolean
let truths: boolean[] = [true, false, true, false]

// Classes
class Car { }

let car: Car = new Car()

// Object literal
let point: {
    x: number;
    y: number;
} = {
    x: 10,
    y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// 1) Functions that return "any" type
const json = `{ "x": 10, "y": 20 }`
const cordinates: { x: number; y: number; } = JSON.parse(json)
console.log(cordinates) // { x: 10, y: 20 }

// 2) When we declare a variable in one line
//  and initialise it in another line
let words = ['red', 'green', 'blue']
let foundWord: boolean

words.forEach((word) => {
    if (word === 'greed') {
        foundWord = true
    }
})

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}