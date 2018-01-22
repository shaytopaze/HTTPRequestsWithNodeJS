var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Downloading image...');
         console.log('Response: ' + response.statusCode + ' Response Message: ' + response.statusMessage + ' Content Type: ' + response.headers['content-type']);
       })
       .on('end', function (end) {
        console.log('Download complete');
        })
       .pipe(fs.createWriteStream('./future.jpg'));