/* const path = require("path"); */

const fullRegex = /\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm
const textRegex = /\[([^\]]*)\]/gm
const hrefRegex = /\((http[s]?:[^\)]*)\)/gm


/* const directoryPath = path.join(__dirname, "files")
 */
/* 
const mdLinks = (path) => {
  fs.readdir(directoryPath, 'utf-8', function (err, files) {
    if (err) {
      console.log(err + ' Deu ruim')
    } else {
      const filesMd = files.filter(function (file) {
        return path.extname(file) == ".md"
      })
      filesMd.forEach(function (file) {
        console.log(file);
        fs.readFile(directoryPath + '/' + file, 'utf-8', function (err, data) {

          if (err) {
            return console.log(`Erro ao na leitura ${err}`);

          } else {
            const arrayObjectLinks = [];
            const arrayMdLinks = data.match(fullRegex);
            arrayMdLinks.forEach((element) => {
              const text = `${element.match(textRegex)}`;
              const href = `${element.match(hrefRegex)}`;
              const file = pathFile
              arrayObjectLinks.push({
                text,
                href,
                file
              })
            })
            return (arrayMdLinks)
          }
        })
      })
    }
  })



module.exports = mdLinks; 

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, 'utf-8', (err, data) => {
      if (err) {
        return reject(`Erro ao na leitura ${err}`);

      } else {
        const arrayObjectLinks = [];
        arrayMdLinks = data.match(fullRegex),
          arrayMdLinks.forEach(element => {
            arrayObjectLinks.push({
              text: `${element.match(textRegex)}`,
              href: `${element.match(hrefRegex)}`,
              file: pathFile
            })
            return resolve(arrayMdLinks)

          });
      };
    });
  });
}; */
