let a="hello"
let b=a
b="hello world"
console.table([a,b])

let oneObj={
    email:"garg@gmail.com",
    age:18
}
let twoObj=oneObj
twoObj.email="hello@gmail.com"
console.table([oneObj,twoObj])