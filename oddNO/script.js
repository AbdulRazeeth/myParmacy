'use strict'
const no =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
const oddNo=[]
// foreach
no.forEach((value)=>{
    if(value % 2 !== 0){
        oddNo.push(value*10)
    }
})
console.log(oddNo)
// filter 
// This method is effective when just want to find the odd number in the array
const filterOdd = no.filter((value)=>{
    return value % 2 !== 0
})
console.log(filterOdd)