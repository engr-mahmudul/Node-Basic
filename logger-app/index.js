const path = require("path");
const fs = require("fs");
const text = process.argv.slice(2).join(" ");
const currentTime = new Date().toLocaleString();
const message = `${text} --> ${currentTime} \n`;
// console.log(text);
const filePath = __dirname + "/log.txt";
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
  console.log("File writting done..!");
});
