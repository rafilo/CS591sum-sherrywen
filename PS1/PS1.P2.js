`use strict`
//problem 2: do the basic numerical calculation
function evaluate(str) {
    // change string into integer to do the calculation
    var left = parseInt(str[0]);
    var operator = str[1];
    var right = parseInt(str[2]);
    switch(operator){
        case `+`:
            return left + right;
            break
        case `-`:
            return left - right;
            break
        case `*`:
            return left * right;
            break
        case `/`:
            return left / right;
            break
    }
} 

const expression = '6-1';
let operator = evaluate(expression);
console.log(operator);
console.log(`${expression} = ${operator}`) 