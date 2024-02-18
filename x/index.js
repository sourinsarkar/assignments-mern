const fs = require("fs")

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });

// console.log("Hi there")

// let a = 0;
// for(let i = 0; i < 10000000; i++) {
//     a++;
// }

// console.log("Hi for the second time.")

// -----------------------------------------------------

// Code with CALLBACKS

function toRead(data) {
    console.log(data);
}

function toPrint(callBack) {
    console.log("Hello from CALLBACK.")
    fs.readFile("a.txt", "utf-8", (err, data) => {
        console.log("Check for callback")
        callBack(data);
    });
}

toPrint(toRead);

// -----------------------------------------------------

// Code with PROMISES

function toPrint2() {
    console.log("Hello from PROMISE.");
    let p = new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            console.log("Check for promise")
            resolve(data);
        });
    });
    return p;
}

toPrint2()
.then(toRead)