// //rest and spread operator
// const hobbies=['singing','dancing']
// const copiedarray=hobbies
// console.log(copiedarray)
// copiedarray.push('reading')
// console.log(hobbies)
function add(...allnumbers){
    let sum=0;
    for(let number of allnumbers){
        sum=sum+number
    }
    return sum
}
console.log(add(5,6,9))