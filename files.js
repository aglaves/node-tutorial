const fs = require('fs');

// Read a file from disk
fs.readFile('./docs/sample.txt', (err, data) => {
    if (err) console.log(err);
    else
        console.log(data.toString());
});

// Write a file to disk
fs.writeFile('./docs/samplewrite.txt', 'I wrote this!', () => {
    console.log("File was written!!!");
});

// Working with directories
if (fs.existsSync('./assets')) {
    console.log('Directory already exists.  Removing');
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    })
} else {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err);
        else console.log('Created');
    });
}

// Deleting Files
if (!fs.existsSync('./docs/deleteme.txt')) {
    console.log('File to delete doesn\'t exist.  Creating just so I can delete it.');
    fs.writeFileSync('./docs/deleteme.txt', 'File to delete');
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err);
        console.log('File deleted');
    })
}

console.log("Last line");