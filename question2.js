function data(obj1, obj2){
    const newobj ={
        ...obj1,...obj2,
    };
    
    return newobj;
}

let obj1 = {a:1,b:2,c:3};
let obj2 = {d:4,e:5,f:6};

const merged = data(obj1,obj2);
console.log(merged);