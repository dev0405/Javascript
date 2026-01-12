//object literal
const user={
    name:"hitesh",
    age:19
}

//object access
// console.log(user.name);
// console.log(user["name"]);

//Symbol in object 
const mysym=Symbol("key1");
const jsUser={
    [mysym]:"mykey1"
}
//symbol access in object
// console.log(jsUser[mysym]);

//to prevent changes in object 
// Object.freeze(jsUser)
// jsUser[mysym]="mykey2" //no  change 
// console.log(jsUser)

//function in object
jsUser.greeting=function(){
    console.log("hello user");
    
}
// console.log(jsUser.greeting); //it print the reference 
// console.log(jsUser.greeting()); //here function get executed 
// console.log(jsUser);

//singleton object
// const user1=new Object()
// console.log(user1); //prints {}

//singleton object
// const user2={}
// console.log(user2); //prints {}

//to join two objects
// const obj3=Object.assign({},user,jsUser) //1st way (target ,source)
// console.log(obj3);

const obj3={...user,...jsUser} //spread method
// console.log(obj3);

//array of keys
// console.log(Object.keys(user));

//array of values
// console.log(Object.values(user));

//arrauy of enteries
// console.log(Object.entries(user));

//destructuring of objects
const course={
    naame:"JS",
    duration:10,
    price:'999'
}
const {duration}=course
console.log(duration)
const {price}=course
console.log(price);
