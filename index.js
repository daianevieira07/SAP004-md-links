 const fs = require("fs");
 const path = require("path");
 /*  const fetch = require('node-fetch'); */


 const mdLinks = (path) => {
   let objLinks = [];
   return new Promise((resolve, reject) => {
     !path ? reject(TypeError("Caminho não encontrado")) : "";
     getFiles(path)
       .map(getLinks)
       .forEach((a) => (objLinks = objLinks.concat(a)));

     resolve(objLinks);
   })
 }


 const getFiles = (dir, files) => {
   const regexMd = new RegExp("\\" + ".md" + "$");
   if (dir.match(regexMd)) {
     return [dir];
   } else {
     return fs.readdirSync(dir).reduce(function (allFiles, file) {
       const route = path.join(dir, file);
       console.log(route);
       if (fs.statSync(route).isDirectory()) {
         getFiles(route, allFiles);
       } else if (file.match(regexMd)) {
         allFiles.push(route);
       }
       return allFiles;
     }, files || []);
   }
 };


 const getLinks = (file) => {
   const fullRegex = /\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm
   const textRegex = /\[([^\]]*)\]/gm
   const hrefRegex = /\((http[s]?:[^\)]*)\)/gm
   const readFile = fs.readFileSync(`./${file}`, "utf-8");
   let arr = readFile.match(fullRegex);
   if (arr) {
     const result = arr.map((a) => {
       let text = a.match(textRegex);
       let link = a.match(hrefRegex);
       text = text[0].replace(/[\[\]\(\)]/g, "");
       link = link[0].replace(/[\[\]\(\)]/g, "");
       return {
         file: file,
         href: link,
         text: text,
       };
     });
     return result;
   }
 };


 module.exports = mdLinks;
