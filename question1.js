function deepClone(obj) {
    const cloned = {...obj}
    return cloned;
}

const original = {
    name: "Faseh",
    address: {
        street: "123 Main St",
        city: "Lahore",
        country: "Pakistan"
    },
    hobbies: ["Coding", "Reading"],
};

const cloned = deepClone(original);
console.log("Original Object: ", original);

cloned.address.city = "Karachi";
cloned.hobbies.push("Gaming");

console.log("Cloned Object after modification: ", cloned);
