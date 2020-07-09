const fs = require("fs");
const path = require("path");

const pathDir = 'C:\\Users\\Dai\\Desktop\\SAP004-md-links'
const pathFile = 'C:\\Users\\Dai\\Desktop\\SAP004-md-links\\readII.md'
const fullRegex = /\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm
const textRegex = /\[([^\]]*)\]/gm
const hrefRegex = /\((http[s]?:[^\)]*)\)/gm


const directoryPath = path.join(__dirname, "files")



const receiveData = fs.stat(pathDir, (err, stats) => {
  if (!err) {
    if (stats.isFile()) {
      console.log('is file ? ' + stats.isFile());

    } else if (stats.isDirectory()) {
      console.log('is directory? ' + stats.isDirectory())

    }
  } else
    throw err;
});



fs.readdir(pathDir, 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data);
  }

});


const receiveFile = fs.readFile(pathFile, 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    const arrayMdLinks = data.match(fullRegex);
    arrayMdLinks.forEach((element) => {
      const arrayObjectLinks = [];
      arrayObjectLinks.push({
        text: `${element.match(textRegex)}`,
        href: `${element.match(hrefRegex)}`,
        file: pathFile.replace('[]', '')

      })
      console.log(arrayObjectLinks);
    })
    return (arrayMdLinks)
  }

});

/* module.exports = ; */
