const fs = require('fs');

const readStream = fs.createReadStream('./docs/largerfile.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/largerWrittenFile.txt');
const writePipe = fs.createWriteStream('./docs/pipedFile.txt');

readStream.on('data', (chunk) => {
    console.log("------ New Chunk ------");
    console.log(chunk);
    writeStream.write('\n----- NEW CHUNK -----\n');
    writeStream.write(chunk);
});

// Using pipeing
readStream.pipe(writePipe);