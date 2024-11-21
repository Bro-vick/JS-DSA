const obj = {
    name: "George",
    age: 25,
    "key-two": true,
    sayName: function(){
        console.log(this.name);
    }
};

obj.hobby = "football";
delete obj.hobby;

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-two']);
console.log(obj);
obj.sayName();

// Object.keys() .values() .entries()

const user = { name: "Alice", age: 25, city: "New York" };
const keys = Object.keys(user);
const values = Object.values(user);
console.log(keys); // Output: ["name", "age", "city"]
console.log(values); // Output: ["Alice", 25, "New York"]

const entries = Object.entries(user);
console.log(entries);
// Combined
// Using Object.keys()
Object.keys(user).forEach(key => console.log(key)); // "name", "age", "city"

// Using Object.values()
Object.values(user).forEach(value => console.log(value)); // "Alice", 25, "New York"

// Using Object.entries()
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output: "name: Alice", "age: 25", "city: New York"