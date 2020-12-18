const profile = {
    name: "Alex",
    age: 20,
    coordes: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

const { age }: { age: number } = profile
const { coordes: { lat, lng } }: { coordes: { lat: number; lng: number } } = profile