function toPrint() {
    return new Promise((resolve) => {
        resolve("Hello World");
    });
}

async function main() {
    // toPrint().then((value) => console.log(value))
    let value = await toPrint();
    console.log(value);
}

main();