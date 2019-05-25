`use strict`
//problem 1: sort the string in alphebetical order
function sort(str){
    // split string into single alphebet and sort it
    var splitstr = str.split('');
    var sorted = splitstr.sort();
    return sorted.join('');
}

console.log(sort("supercalifragilisticexpialidocious"));