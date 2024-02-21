
var createCounter = function(init) {
    var initalVal = init
    return{
           increment: ()=> ++init,
           decrement: ()=> --init,
           reset: ()=>init=initalVal

    }
    
};

 const counter = createCounter(0)
 console.log(counter.increment()); // 6
 console.log(counter.increment()); // 6
 console.log(counter.decrement()); // 4
 console.log( counter.reset()); // 5
 console.log( counter.reset()); // 5
 
