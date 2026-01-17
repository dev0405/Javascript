(function one(){
    console.log(`hello`);
})();

(()=>{
    console.log('hello arrow');
    
});

((name)=>{
    console.log(`hello ${name}`);
    
})('dev');