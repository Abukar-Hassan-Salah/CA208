const fs = require('fs');

const readStream = fs.createReadStream("input.csv");


readStream.setEncoding("utf8");


readStream.on("data", (data) => {
    console.log(data.length)
})

readStream.on("close", () => {
    console.log("File reading completed!")
})
const rawData = `Name,description
Macbook Pro, This is just a demo`


const writeStream = fs.createWriteStream("input.csv")

for (let index = 0; index < 1e+7; index++) {
    writeStream.write(rawData)
}