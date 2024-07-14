const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
})

fs.writeFile(path.join(__dirname,'files','reply.txt'),"Nice to meet you", (err) => {
    if (err) {
        throw err;
    } else {
        console.log('file created');
    }
})

fs.appendFile(path.join(__dirname,'files','test.txt'),"Nice to test you", (err) => {
    if (err) {
        throw err;
    } else {
        console.log('file updated');
    }
})

process.on('uncaughtException', (err) => {
    console.error(`there was an error ${err}`);
    process.exit(1);
})