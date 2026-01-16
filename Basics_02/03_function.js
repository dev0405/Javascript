//function creation and call
function saymyname(name){
    console.log(`Hello ${name}`)
}
// saymyname("Dev")

//rest operator(...)
function calculatepricearray(...num){
    return num;
}
// console.log(calculatepricearray(23,4,3423,4,3,4))

//to pass object in function
const user={
    username:"Dev",
    price:999
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)