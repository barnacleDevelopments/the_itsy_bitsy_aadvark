/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: Question.js
===========================================
*/

const readlineSync = require("readline-sync");

module.exports = class Question {
  constructor(type, question, options) {
    this.type = type,
    this.content = `\n${question}`,
    this.options = options;
    this.optionLetters = this.options.choices.map(o => o.letter)
  }

  ask = () => {
    // get the first and last option letters
    let firstLetter = this.optionLetters[0]
    let lastLetter = this.optionLetters.reverse()[0] 
    let questionContent =  `${this.content} (${firstLetter}-${lastLetter}):\n` 
    this.options.choices.forEach(o => {
      questionContent = questionContent.concat(
        `${o.letter}) ${o.text} \n`
        )
    });

    // ask inital question amd capture anwser
    let anwser = readlineSync.question(
      questionContent + `(${firstLetter}-${lastLetter}): `
      );
    // validate anwser and ask again if incorect type
    if(!this.isLetter(anwser)) {
      while(!this.isLetter(anwser)) {
        anwser = readlineSync.question(
          this.content + ` (${firstLetter}-${lastLetter}): `
        );
      }
    }
   return this.getAnwserValue(anwser)
  }

  getAnwserValue = (anwser) => {
    let result
    for(let i = 0; i < this.options.choices.length; i++) {
      if((this.options.choices[i].letter) === anwser) {
        result = this.options.choices[i]
        result.type = this.options.type
      }
    }
    return result
  }

  isLetter = (anwser) => {
    return this.optionLetters.includes(anwser.trim())
  }

  validateType = (anwser, expectType) => {
    if (expectType === "number") {
      return isNaN(anwser);
    }
  
    if (expectType === "string") {
      return !isNaN(anwser);
    }
  };
};
