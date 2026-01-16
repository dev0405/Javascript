//concept of this 
const user={
    username:'dev',
    price:999,
    welcomemsg:function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}
// console.log(user.welcomemsg());


//arrow function
const hi=()=>{
    let username="dev"
    console.log(this);
    
}
// hi() // {}

// const addtwo=(n1,n2)=>{
//     return n1+n2
// }
// console.log(addtwo(3,7));

// const addtwo=(n1,n2)=> n1+n2
// console.log(addtwo(3,7));

// const addtwo=(n1,n2)=> (n1+n2)
// console.log(addtwo(3,7));

const objectaf=()=>({username:"hitesh"})
console.log(objectaf());
