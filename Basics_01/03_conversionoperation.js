let num="33"
let num1=Number(num)
// console.table([num,num1,typeof num,typeof num1])

let num2="33ac"
let num3=Number(num2)
// console.table([num2,num3,typeof num2,typeof num3])

let num4=null
let num5=undefined
let num6=Number(num4)
let num7=Number(num5)
// console.table([num4,num5,num6,num7])

let num8=""
let num9="hello"
let num08=Boolean(num8)
let num09=Boolean(num9)
// console.table([num8,num9,num08,num09])

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true)
console.log(+"")