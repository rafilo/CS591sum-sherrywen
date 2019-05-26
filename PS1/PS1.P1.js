<<<<<<< HEAD
`use strict`
//problem 1: sort the string in alphebetical order
function sort(str){
    // split string into single alphebet and sort it
    var splitstr = str.split('');
    var sorted = splitstr.sort();
    return sorted.join('');
}

=======
`use strict`
//problem 1: sort the string in alphebetical order
function sort(str){
    // split string into single alphebet and sort it
    var splitstr = str.split('');
    var sorted = splitstr.sort();
    return sorted.join('');
}

>>>>>>> a3eea1fce6e178ad1202d36893ff81f860efb09f
console.log(sort("supercalifragilisticexpialidocious"));