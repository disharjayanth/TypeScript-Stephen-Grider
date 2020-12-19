const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
}

// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["brown", true, 40]

const sprite: Drink = ["clear", true, 100]

const tea: Drink = ["light brown", false, 0]

const carSpecs: [number, number] = [400, 2000]

const carStats = {
    horsePower: 400,
    weight: 2000
}