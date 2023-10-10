const fs = require('fs');

// Read the input.txt

let file = fs.readFileSync("input.txt");
console.log(file.toString());

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err) return console.error(err);

    console.log(data.toString());
})

fs.writeFile("data.txt", "This is just a demo data file", (err) => {
    if(err) return console.error(err);

    console.log("File created!")
})

fs.rename("data.txt", "datum.txt", (err) => {
    if(err) return console.error(err);

    console.log("File renamed!")
})

fs.unlink("datum.txt", (err) => {
    if(err) return console.error(err);

    console.log("File deleted!")
});

// fs.appendFile
// fs.copy