console.log('hello world');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filter = arr.filter((item, index) => {
    console.log('check filter item', item, 'index', index)
    return item && item > 5;
});
console.log(filter);

let array = [
    {name : 'eric',age : 25},
    {name : 'peter',age : 18},
    {name : 'tony',age : 40},
    {name : 'cap',age : 35}
]
let find = array.find((item,index) => {
    return item && item.age > 38;
});
console.log(find);