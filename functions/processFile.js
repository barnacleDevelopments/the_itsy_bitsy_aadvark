/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: questions.js
===========================================
*/

const fs = require("fs");
/**
 * 
 * @param {string} filePath the file path location of the text file.
 * @param {function} func a calback function to handle the text.
 */

module.exports = processFile = (filePath, func) => {
    fs.readFile(filePath, "utf8", (err, contents) => {
      if(!err) {
        return func(contents)
      } else {
        console.log(err)
      }
    });
}