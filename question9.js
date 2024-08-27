function addobj(obj, property,value) {
    return {
        ...obj,
        [property]: value
    };
    
}

const students = {
    name: "faseh",
    age: 20,
}
const newproperty = "email";
const newValue = "faseh@gmail.com";

const updatedobj= addobj(students,newproperty,newValue);
console.log(updatedobj);


