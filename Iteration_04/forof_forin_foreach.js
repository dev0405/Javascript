//for of
const arr=[1,2,3,4,5]
// for(const i of arr){
//     console.log(i);
    
// }
//object cannot be iterable through this method
//map can be iterable
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('fr',"France")
// for(const [key,value] of map){
//     console.log(key,':-',value);
    
// }

// for in
//map cannot be iterable through this method
//it is used for object 
//with array it give indexes
const obj={
    '1':'one',
    '2':'two'
}
// for(const key in obj){
//     console.log(obj[key]);
    
// }
// for(const i in arr){
//     console.log(i);
    
// }

//forEach() - it take call back value 
// it does not return any value 

arr.forEach((val)=>{
    console.log(val);
    
})