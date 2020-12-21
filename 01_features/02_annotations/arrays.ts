const carMakers: string[] = ["Ford", "Toyota", "Benz", "Tesla"]
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ["f150"],
    ["carolla"],
    ["camoro"]
]

// Help with inference when extracting values
const car = carMakers[3]
const myCar = carMakers.pop()

// Prevent incompatible values
// wrong carMakers.push(10) adding a number to string array is now allowed.
carMakers.push("Porche")

// Help with 'map'
carMakers.map((car: string): string => {
    return car
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "12-12-2020"]
importantDates.push("20-12-2020")
importantDates.push(new Date())