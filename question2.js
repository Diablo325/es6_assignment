function data(...objs) {
    const newObj = {};
    for (const obj of objs) {
        Object.assign(newObj, obj);
    }
    return newObj;
}

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {d: 4, e: 5, f: 6};
let obj3 = {h: 7, i: 8, j: 9};

const merged = data(obj1, obj2, obj3);
console.log(merged);
