`use strict`
//problem 2: do the basic numerical calculation
function getOperator(str) {
    // change string into integer to do the calculation
    var operator = str[1];
    switch(operator){
        case `+`:
            return (left, right) => left + right;
            break
        case `-`:
            return (left, right) => left - right;
            break
        case `*`:
            return (left, right) => left * right;
            break
        case `/`:
            return (left, right) => left / right;
            break
    }
}

const evaluate = str => {
    return getOperator(str)(parseInt(str[0]),parseInt(str[2]));
}
const expression = '6-1';
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`)
