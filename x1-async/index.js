let d = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Something");
    }, 2000)
})

function callback() {
    console.log(d);
}

// console.log(d) // Promises can be used outside the functions too. It is just like other classes. It prints Promise as pending because the promise is getting resolved after 2 minutes.
d.then(callback); // This is throws the string that has been passed to the promise because it is being resolved and then printed.

// d.then(function() {
//     console.log(d);
// })

d.then((value) => {
    console.log(value);
})