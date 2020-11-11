/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: questions.js
===========================================
*/

const fs = require("fs")
const questions = require("./data/questions")
// fs.writeFile("./inputText.txt", (contents) => {
// });

/**
 * 
 * @param {array} questionArr an array of strings.            
 * @param {func} func callback function takes anwsers as parameters.
 */

const askMultiQuestions = (questionArr, func) => {
  let anwsers = []
  questionArr.forEach(question => {
    anwsers.push(question.ask());
  });
  func(anwsers)
}

/**
 * 
 * @param {string} filePath the file path location of the text file.
 * @param {function} func a calback function to handle the text.
 */

const processTextFile = (filePath, func) => {
  fs.readFile(filePath, "utf8", (err, contents) => {
    if(!err) {
      func(contents)
    } else {
      console.log(err)
    }
  });
}


processTextFile("the_story_file.txt", (contents) => {
  askMultiQuestions(questions, (anwsers) => {
    anwsers.forEach(a => {
      
    })
  })
})

// log output
