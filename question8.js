

function merge(...array){
   return [].concat(...array);
}


const arr1 =[1,2,3,4];
const arr2 =[5,6,7,8];
const arr3 =[9,10,11,12];
const arr4 =[13,14,15,16];

const array= merge(arr1,arr2,arr3,arr3);
console.log(array);
