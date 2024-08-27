function merge(arr1,arr2){
    let mergedarray= [...arr1,...arr2];
    return mergedarray;
}


const arr1 =[1,2,3,4];
const arr2 =[5,6,7,8];

const array= merge(arr1,arr2);
console.log(array);

