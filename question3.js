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
console.log("origianl object: " , students);

const updatename = update(students, "name" , "ali");
console.log("updated name: ",updatename);

const updateage = update(students , "age" , 22);
console.log("updated age: ",updateage);

const addprop = update(students , "weight" , 95);
console.log("added new property: ",addprop);






