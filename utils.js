const myModules = require('./lodashModule')

function textToWordsArray(text) {
    let arr = myModules.splitTextToArrayOfWords(text)
    return arr
}
function reverseArr(text){
    let str = myModules.reverseArr(text)
    return str
}

function uniqArrLength(text){
    let num = myModules.uniqArrLength(text)
    return num
}
function uniqArrUpperCase(text){
    let arr = myModules.uniqArrUpperCase(text)
    return arr
}
function uniqLargeThenFive(text){
    let arr = myModules.uniqLargeThenFive(text)
    return arr
}

const myFunctions = {
    uniqArrLength,
    uniqArrUpperCase,
    uniqLargeThenFive,
    reverseArr,
    textToWordsArray
}
module.exports = myFunctions;