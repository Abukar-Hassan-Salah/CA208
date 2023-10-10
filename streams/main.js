const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("input.csv");

const writeStream = fs.createWriteStream("input.csv.gz");

readStream.pipe(zlib.createGzip()).pipe(writeStream);

// readStream.on("data", (data) => {
//     writeStream.write(data)
// })