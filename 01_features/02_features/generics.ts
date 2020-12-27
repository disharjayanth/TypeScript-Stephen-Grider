class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}

// Array of any type
class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}

const arrayOfStrings = new ArrayOfAnything<string>(["Hello", "Bye", "Gm", "Gn"]);
console.log(arrayOfStrings.get(2));

const arrayOfNumbers = new ArrayOfAnything<number>([10, 100, 1000, 10000, 100000]);
console.log(arrayOfNumbers.get(1));

// Example of generic with functions.
function printStrings(arr: string[]): void {
    arr.forEach(item => {
        console.log(item);
    });
}

function printNumbers(arr: number[]): void {
    arr.forEach(item => {
        console.log(item);
    });
}

printStrings(["Hello", "Hi", "Hey", "Howdy"]);
printNumbers([10, 20, 30, 40]);

function printAnything<T>(arr: T[]): void {
    arr.forEach(item => {
        console.log(item);
    });
}

printAnything<string>(["Hello", "Hi", "Hey", "Howdy"]);
printAnything<number>([10, 20, 30, 40]);

// OR
printAnything(["Hello", "Hi", "Hey", "Howdy"]);
printAnything([10, 20, 30, 40]);

// // Generic Constraints
class House {
    print(): void {
        console.log("I am a house.");
    }
}

class Car {
    print(): void {
        console.log("I am a car.");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    arr.forEach((item) => {
        item.print();
    });
}

printHousesOrCars([new House(), new House()]);
printHousesOrCars([new Car(), new Car()]);
printHousesOrCars([new Car(), new House()]);