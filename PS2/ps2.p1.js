`use strict`
function * fibs(){
    let [val1, val2, result] = [0,1,0];
    while(true){
    result = val1 + val2
    val1 = val2
    val2 = result
    yield result;
    }
} 

function * evenfib(){
    for (fib of fibs()){
        if (fib % 2 == 0){
            yield fib;
        }
        else{
            continue;
        }
    }
}

myfibs = evenfib();
let count = 5
while (count --> 0){
    console.log(myfibs.next().value)
}