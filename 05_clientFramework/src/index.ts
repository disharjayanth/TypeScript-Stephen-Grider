import { User } from "./models/User";

const user = new User({ id: 2, name: "Henry", age: 0 });

user.events.on("change", () => {
    console.log("change event #1.");
});

user.events.trigger("change");