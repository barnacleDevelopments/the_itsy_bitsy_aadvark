/*
==========================================
Assignment_4: Program 2
Author: Devin Davis
Date: November 9h, 2020
File: questions.js
===========================================
*/

// Classes
const Choice = require("../classes/Choice");
const ChoiceStack = require("../classes/ChoiceStack");
const Question = require("../classes/Question");
const processFile = require("../functions/processFile")

let animalNames, actionWords1, objectives, 
    actionWords2, nouns, actionWords3, adverbs 

/**
 * 
 * @param {array} options an array of strings (options)
 * @param {string} type the type of word.
 * @description creates a stack of choice objects. 
 */

const createChoiceStack = (options, type) => {
  let newStack = new ChoiceStack(type)
  let letters = ["a", "b", "c", "d", "e", "f"];
  let i
  let optionsLength = options.length
  if(!optionsLength > 6) {
    throw console.error("Choice length is too long!");
  } else {
    for(i = 0; i < optionsLength; i++) {
      let choice = new Choice(letters[i], options[i + 1]); 
      newStack.choices.push(choice)
    }
  }
  return newStack
}


let questions = processFile("the_choices_file.csv", (content) => {
  let fileContent = content.split("\n");
    animalNames = fileContent[0].split(",")
    actionWords1 = fileContent[1].split(",")
    objectives = fileContent[2].split(",")
    actionWords2 = fileContent[3].split(",")
    nouns = fileContent[4].split(",")
    actionWords3 = fileContent[5].split(",")
    adverbs = fileContent[6].split(",")

    // create array of questions containing choiceStack objects
    let questions = [
      new Question("string", animalNames[0], createChoiceStack(animalNames, "name")), 
      new Question("string", actionWords1[0], createChoiceStack(actionWords1, "verb1")),
      new Question("string", objectives[0], createChoiceStack(objectives, "objective")),
      new Question("string", actionWords2[0], createChoiceStack(actionWords2, "verb2")),
      new Question("string", nouns[0], createChoiceStack(nouns, "noun")),
      new Question("string", actionWords3[0], createChoiceStack(actionWords3, "verb3")),
      new Question("string", adverbs[0], createChoiceStack(adverbs, "adverb"))
    ];
  
    return questions
});



module.exports = questions





