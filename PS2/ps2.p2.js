const splitword = str => str.split(` `);

function * wordsInSentence(str){
    for (word of splitword(str)){
        yield word;
    }
}

let samplestr = `All I know is something like a bird within her sang`
let mysplit = wordsInSentence(samplestr);
let count = splitword(samplestr).length;
while (count --> 0){
    console.log(mysplit.next().value)
}
