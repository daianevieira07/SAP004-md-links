const fs = require("fs");
const path = require("path");

const pathDir = 'C:\\Users\\Dai\\Desktop\\SAP004-md-links'
const pathFile = 'C:\\Users\\Dai\\Desktop\\SAP004-md-links\\readII.md'
const fullRegex = /\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm
const textRegex = /\[([^\]]*)\]/gm
const hrefRegex = /\((http[s]?:[^\)]*)\)/gm


const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        return reject('Arquivo não encontrado')
      } else {
        const arrayMdLinks = data.match(fullRegex);
        let arrayLinks = [];
        arrayMdLinks.forEach((element) => {
          const obj = {
            text: `${element.match(textRegex)}`.replace('[]', ''),
            href: `${element.match(hrefRegex)}`,
            file: path.replace('[]', '')
          };
          arrayLinks.push(obj)
        })
        return resolve(arrayLinks)

      }

    });

  });
}

module.exports = mdLinks;






/* 
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
    const findMd = data.match(\.md$); 
    resolve (arrayLinks)

  }

});


fs.readFile(pathFile, 'utf-8', function (err, data) {
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

}); */
