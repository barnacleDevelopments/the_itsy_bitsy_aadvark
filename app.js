/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: questions.js
===========================================
*/

const processFile = require("./functions/processFile")
const Choice = require("./classes/Choice");
const ChoiceStack = require("./classes/ChoiceStack");
const Question = require("./classes/Question");

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

/**
 * 
 * @param {array} options an array of strings (options)
 * @param {string} type the type of word.
 * @description creates a stack of choice objects. 
 */

const createChoiceStack = (options, type) => {
  let newStack = new ChoiceStack(type)
  let letters = ["a", "b", "c", "d", "e"], 
      i, 
      optionsLength = options.length

  if(!optionsLength > 6) {
    throw console.error("Choice length is too long!");
  } else {
    for(i = 0; i < optionsLength; i++) {
      let choice = new Choice(letters[i], options[i]); 
      newStack.choices.push(choice)
    }
  }

  return newStack
}


processFile("the_choices_file.csv", (content) => {
  let wordTypes = ["name", "verb1", "objective", "verb2", "noun", "verb3", "adverb"]

  let questions = content.split("\r\n").map((text, i) => {
    let textArr = text.split(",");
    let question = textArr.shift();
    let options = textArr;
    return new Question("string", question, createChoiceStack(options, wordTypes[i]));
  });

  processFile("the_story_file.txt", (contents) => {
    let text = contents.split(" ");
    let proccessedText = contents;
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
});