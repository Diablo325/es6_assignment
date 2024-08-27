function update(obj, property,value) {
    return {
        ...obj,
        [property]: value
    };
    
}

const students = {
    name: "faseh",
    age: 20,
}
const updatename = update(students, "name" , "ali");
console.log("updated name: ",updatename);

const updateage = update(students , "age" , 22);
console.log("updated age: ",updateage);

console.log("origianl object: " , students);


