@classDecorator
class Boat {
    // @testDecorator
    color: string = "red";

    // @testDecorator
    get formattedColor(): string {
        return `The color of boat is: ${this.color}`;
    }

    // @logError("Boat was sunk in ocean..")
    pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
        if (speed === "fast") {
            console.log("shish....");
        } else {
            console.log("nothing....");
        }
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log("Parameter decorator -------");
    console.log("Target:", target);
    console.log("Key:", key);
    console.log("Index:", index);
    console.log("Parameter decorator -------");
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

// function testDecorator(target: any, key: string) {
//     console.log("Target:", target);
//     console.log("Key:", key);
// }

// function logError(errorMessage: string) {
//     return function (target: any, key: string, desc: TypedPropertyDescriptor<(speed: string) => void>): void {
//         const method = desc.value;

//         if (method === undefined) {
//             return;
//         }

//         desc.value = function () {
//             try {
//                 method("fast");
//             } catch (e) {
//                 console.log(errorMessage);
//                 return;
//             }
//         };
//     };
// }