import "reflect-metadata";

// // Meta Data on Object
// const plane = {
//     color: "Red"
// };

// Reflect.defineMetadata("note", "plane is red in color", plane);
// Reflect.defineMetadata("height", "10m", plane);

// console.log(plane);

// console.log(Reflect.getMetadata("note", plane));
// console.log(Reflect.getMetadata("height", plane));

// Reflect.defineMetadata("info", "meta data on property of object", plane, "color");
// console.log(Reflect.getMetadata("info", plane, "color"));

// // Meta Data on Class
@printMetaData
class Plane {
    color: string = "red";

    @markFunction("Info about plane flying....")
    fly(): void {
        console.log("plane is flying....");
    };
}

function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata("secret", secretInfo, target, key);
    };
}

function printMetaData(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata("secret", target.prototype, key);
        console.log(secret);
    }
}