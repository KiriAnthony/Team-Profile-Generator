const fs = require('fs');
const generatePage = require('./src/page-template');
const {writeFile} = require('./utils/generate-site');

writeFile('Hello World!');
// fs.writeFile('index.html', generatePage(), err => {
//     if(err) throw err;
//     console.log('File complete!');
// });