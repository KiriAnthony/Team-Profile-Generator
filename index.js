const fs = require('fs');
const generatePage = require('./src/page-template');
const {writeFile} = require('./utils/generate-site');
const Manager etc;
const path = require("path");
const inquirer = require("inquirer");

writeFile('Hello World!');
// fs.writeFile('index.html', generatePage(), err => {
//     if(err) throw err;
//     console.log('File complete!');
// });