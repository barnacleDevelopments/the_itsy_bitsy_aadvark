/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: questions.js
===========================================
*/

const fs = require("fs");
const questions = require("./data/questions");
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

/**
 * 
 * @param {number} num the text block index value.
 * @description returns the coresponding word type name to the number provided. 
 */

const getIndexType = (num) => {
  switch(num) {
    case "_1_":
      return "name"
    case "_2_":
      return "verb1"
    case "_3_":
      return "objective"
    case "_4_":
      return "verb2"
    case "_5_":
      return "noun"
    case "_6_":
      return "verb3"
    case "_7_":
      return "adverb"
  }
}

processTextFile("the_story_file.txt", (contents) => {
  let text = contents.split(" ");
  let proccessedText = contents
  askMultiQuestions(questions, (anwsers) => {
    text.forEach(l => {
      anwsers.forEach(a => {
        if(a.type === getIndexType(l)) {
          proccessedText = proccessedText.replace(l, a.text)
        } 
      });
    });
  });
  console.log(`\n${proccessedText}`)
});