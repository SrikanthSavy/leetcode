
var map = function(arr, fn) {

    for(let i=0; i<arr.length;++i)
       arr[i] = fn(arr[i],i)
};
var array =[1,2,3]
var plusone = (n,i)=> n+1
var plusI = (n,i) => n+i;
var ret42 =() => 42

//map(array,plusone);
//console.log(array) 



map(array,plusI);
console.log(array) 
    
    