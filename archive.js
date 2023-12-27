
var fs = require('fs')
const path = require("path")
const fsExtra = require('fs-extra')

var currentdate = new Date();
var datetime = currentdate.getDate() + "_"
  + (currentdate.getMonth()) + "_"
  + currentdate.getFullYear() + "_"
  + currentdate.getHours() + "_"
  + currentdate.getMinutes() + "_"
  + currentdate.getSeconds();

function copyFolderSync(from, to) {
  fs.mkdirSync(to);
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

async function cleanDirectory(dir) {
  try {
    await fsExtra.emptyDir(dir);
  } catch (err) {
    console.log(err);
  }
}

// Archive Cucumber Report
let to = `cypress/e2e/Reports/Archived/${datetime}`
let from = 'cypress/e2e/Reports/cucumberReport/'
copyFolderSync(from, to)
cleanDirectory(from)
