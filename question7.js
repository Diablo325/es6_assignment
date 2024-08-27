function separates (book){
    const {title,author,...rest}=book;
    const obj1 = {title,author};
    const obj2 = {...rest};
    
    return {obj1,obj2};


}

const book = {
    title: 'Book Title',
    author: 'Author Name',
    year: 2020,
    pages: 200,
};
const {obj1,obj2}=separates(book);
console.log("object 1: " ,obj1);
console.log("object 2: " ,obj2);

