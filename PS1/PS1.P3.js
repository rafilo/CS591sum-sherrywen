`use strict`
//problem 3:
function callfunc(str, func){
    return(func(str));
}
//result 1
const result = callfunc("supercalifragilisticexpialidocious", splitfunc => splitfunc.replace(/c/gi, ",c").split(","));
console.log(result);

//result 2
const result2 = callfunc("supercalifragilisticexpialidocious",splitfunc => { return {
    originalString: "supercalifragilisticexpialidocious",
    modifiedString: splitfunc.replace(/a/gi, "A"),
    numberReplaced: "supercalifragilisticexpialidocious".match(/a/g).length,
    length: "supercalifragilisticexpialidocious".length
}});
console.log(result2);