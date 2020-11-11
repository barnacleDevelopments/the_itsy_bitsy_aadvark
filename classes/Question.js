const readlineSync = require("readline-sync");

module.exports = class Question {
  constructor(type, question, options) {
    this.type = type,
    this.content = `\n${question}`,
    this.options = options;
    this.optionLetters = this.options.choices.map(o => o.letter)
  }

  ask = () => {
    let questionContent =  this.content + ":" + "\n" 
    this.options.choices.forEach(o => {
      questionContent = questionContent.concat(`${o.letter}) ${o.text} \n`)
    });
    // ask inital question amd capture anwser
    let anwser = readlineSync.question(questionContent + ": ");
    // validate anwser and ask again if incorect type
    if(!this.isLetter(anwser)) {
      while(!this.isLetter(anwser)) {
        anwser = readlineSync.question(this.content + ": ");
      }
    }
   return this.getAnwserValue(anwser)
  }

  getAnwserValue = (anwser) => {
    let result
    for(let i = 0; i < this.options.choices.length; i++) {
      if((this.options.choices[i].letter || i + 1) === anwser) {
        result = this.options.choices[i]
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
