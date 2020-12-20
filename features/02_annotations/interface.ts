interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name} | Year: ${this.year} | Broken?: ${this.broken}.`
    }
}

// Just for practise writing in 2 type of functions:
// 1) Normal function with function name and function keyword
function printVehicle(vehicle: Vehicle): void {
    console.log(vehicle.summary())
}

printVehicle(oldCivic)

// 2) Arrow function
const displayVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken?: ${vehicle.broken}`)
}

displayVehicle(oldCivic)

// ********************** --------------------- ********************** 

interface Reportable {
    summary(): string
}

const tesla = {
    name: "model 3",
    year: new Date(),
    broken: false,
    summary(): string {
        return `Name: ${this.name} | Year: ${this.year} | Broken?: ${this.broken}.`
    }
}

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My Drink has ${this.sugar} grams of sugar.`
    }
}

const printSummary = (item: Reportable) => {
    console.log(item.summary())
}

printSummary(tesla)
printSummary(drink)