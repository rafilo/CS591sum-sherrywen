`use strict`
const cube = input => {
    for(const arg of input){
        console.log(arg**3);
    }
}
cube([1,2,3,4,5,6,7]);