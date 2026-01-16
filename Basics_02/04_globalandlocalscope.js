//global and local scope concept 
const course="js"
if(true){
    const name="dev"
    let age=14
    var price=2424
    console.log(course); // can be accessed due it its global scope 
    
}
// console.log(name) // cannot be accessed due to local scope
// console.log(age); // similar due to local scope cannot be accessed
// console.log(price); // it will get accessed as it was used earlier when the concept of global and local scope was there 


