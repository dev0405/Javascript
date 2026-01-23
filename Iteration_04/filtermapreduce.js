//filter

const mynum=[1,2,3,4,5]
const newnum=mynum.filter((num)=>{
    return num>2
})
console.log(newnum);

//map

const newnum1=mynum.map((num)=> num+10)
console.log(newnum1);

//reduce

const mytotal=mynum.reduce((acc,num)=>{
    return acc+num
},0)
console.log(mytotal);
