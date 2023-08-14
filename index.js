const fs = require("fs");
const myFunctions = require('./utils')

fs.readFile('data.txt','utf-8', function (err, data) {
    if (err) throw err;

    console.log(myFunctions.uniqLargeThenFive(data));
});





// const david = fs.readFile("data.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   let newData = "";
//   newData += uniqLargeThenFive(data);
//   newData += '\n'
//   newData += uniqArrUpperCase(data);
//   fs.writeFile("data2.txt", newData, (err) => {
//     if (err) throw err;
//   });
// });
// david