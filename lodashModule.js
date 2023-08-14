const lodash = require("lodash");

function splitTextToArrayOfWords(text) {
  let arr = lodash.words(text);
  return arr;
}

function reverseArr(text) {
  let arr = lodash.words(text);
  let newArr = lodash.reverse(arr);
  return lodash.join(newArr, " ")
}

function uniqArrLength(text) {
  let arr = lodash.words(text);
  let newArr = lodash.uniq(arr);
  return newArr.length;
}

function uniqArrUpperCase(text) {
  let arr = lodash.words(text);
  let newArr = lodash.uniq(arr);
  return lodash.upperCase(lodash.join(newArr, " "));
}

function uniqLargeThenFive(text) {
  let arr = lodash.words(text);
  let newArr = lodash.uniq(arr);
  let newArr2 = lodash.filter(newArr, (word) => word.length > 5);
  return lodash.join(newArr2, " ");
}

const myModule = {
  uniqLargeThenFive,
  uniqArrUpperCase,
  uniqArrLength,
  splitTextToArrayOfWords,
  reverseArr,
};
module.exports = myModule;
