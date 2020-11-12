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
const Question = require("../classes/Question")

// lists of words
const animalNames = ["aardvark", "hippo", "duck", "pelican", "t-rex"];
const actionWords1 = ["jumped",	"flipped",	"looked", "added", "squashed"];
const objectives = ['impressive', 'slimy', 'silly', 'frozen', 'magical'];
const actionWords2 = ['exploded', 'scattered', 'flapped', 'snooped', 'poked'];
const nouns = ['president', 'pastry', 'chef', 'karate', 'beer mug', 'tank'];
const actionWords3 = ["messed", "smacked", "tripped", "danced", "slurped"];
const adverbs = ["dreadfully", "happily", "stupidly", "awkwardly", "beautifully"];

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
        let choice = new Choice(letters[i], options[i]); 
        newStack.choices.push(choice)
      }
    }
    return newStack
  }

// create array of questions containing choiceStack objects
const questions = [
    new Question("string", "Please choose an animal name", createChoiceStack(animalNames, "name")), 
    new Question("string", "Please choose an action word ending in 'ed'", createChoiceStack(actionWords1, "verb1")),
    new Question("string", "Please choose an objective", createChoiceStack(objectives, "objective")),
    new Question("string", "Please choose another action word ending in 'ed'", createChoiceStack(actionWords2, "verb2")),
    new Question("string", "Please choose a noun", createChoiceStack(nouns, "noun")),
    new Question("string", "Please choose another action word ending in 'ed'", createChoiceStack(actionWords3, "verb3")),
    new Question("string", "Please choose an adverb", createChoiceStack(adverbs, "adverb"))
]

module.exports = questions