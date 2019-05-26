<<<<<<< HEAD
`use strict`
//problem 2: do the basic numerical calculation
const getOperator = operator => {
    // change string into integer to do the calculation
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
const evaluate = str =>{
    var left = str[0];
    var operator = str[1];
    var right = str[2];
    let mathfunction = getOperator(operator);
    return mathfunction(left, right);
}
const expression = '6-1';
let operator = evaluate(expression);
=======
`use strict`
//problem 2: do the basic numerical calculation
const getOperator = operator => {
    // change string into integer to do the calculation
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
const evaluate = str =>{
    var left = str[0];
    var operator = str[1];
    var right = str[2];
    let mathfunction = getOperator(operator);
    return mathfunction(left, right);
}
const expression = '6-1';
let operator = evaluate(expression);
>>>>>>> a3eea1fce6e178ad1202d36893ff81f860efb09f
console.log(`${expression} = ${operator}`) 