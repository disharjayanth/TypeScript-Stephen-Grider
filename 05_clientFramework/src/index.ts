import { User } from "./models/User";

const user = new User({ name: "John", age: 20 });
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "Smith", age: 42 });
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "Sammy" });
console.log(user.get("name"));
console.log(user.get("age"));