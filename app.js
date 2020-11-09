/*
==========================================
Assignment_4: Program 1
Author: Devin Davis
Date: November 7th, 2020
File: app.js
===========================================
*/

const readlineSync = require("readline-sync");
const fs = require("fs")
const text = readlineSync.question("Give me some text!")
fs.writeFile("./inputText.txt", text, (contents) => {
});

class Line {
 /**
  * 
  * @param {string} text the string to use as line.
  * @param {number} lineNum the line number of the string.
  */
  constructor(text, lineNum) {
    this.text = text
    this.lineNum = lineNum
    this.size = this.getTextLength(text)
  }

  /**
   * 
   * @param {number} num a number
   * @description returns true if more then number provided. 
   */
  isMoreThen(num) {
   return this.text.length > num ? true : false
  }

    /**
   * 
   * @param {number} num a number
   * @description returns true if less then number provided. 
   */

  isLessThen(num) {
    return this.text.length <= num ? true : false
  }

  getTextLength() {
    return this.text.length
  }
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
 * @param {string} text a string containing new line spacing. 
 */

const convertToArr = (text) => {
  return text.split("\n")
}

/**
 * 
 * @param {array} textArr an array of strings.
 * @description adds a number to the begining of each string in array.  
 */

const addLineNumbers = (textArr) => {
  let linesContainer = []
  let i 
  for(i = 0; i < textArr.length; i++) {
    let line = new Line(textArr[i], i + 1)
    linesContainer.push(line)
  }
  return linesContainer
}


/**
 * 
 * @param {array} lineContainer a array of line class objects.
 * @param {number} num the desired length of each string to be converted.
 */

const convertToUpperCase = (lineContainer, num) => {
  let newLineContainer = lineContainer.map(line => {
    if(line.isLessThen(num)) {
      let newText = line.text.toUpperCase()
      line.text = newText
      return line
    }
    return line
  })
  return newLineContainer
}

/**
 * 
 * @param {array} lineContainer a array of line class objects.
 * @param {number} num the desired length of each string to be converted.
 */

const convertToLowerCase = (lineContainer, num) => {
  let newLineContainer = lineContainer.map(line => {
    if(line.isMoreThen(num)) {
      let newText = line.text.toLowerCase()
      line.text = newText
      return line
    }
    return line
  })
  return newLineContainer
}

/**
 * 
 * @param {array} lineContaier a array of line class objects.
 * @description Picks a random index of the line container and removes it from it.
 */

const ommitRandom = (lineContaier) => {
  let randomIndex = Math.floor(Math.random() * lineContaier.length)
  let newLineContainer = lineContaier.filter((line, index) => {
    return index !== randomIndex
  })
  return newLineContainer
}

const logText = (lineContaier) => {
  console.log("\n==========================================\nAltered Text\n==========================================")
  lineContaier.forEach(line => {
    console.log(`${line.lineNum}: ${line.text}`)
  })
  console.log("\n")
}

// log output
processTextFile("bacon.txt", (contents) => {
  let newLineContainer, oldText
  oldText = contents 
  let textArr = convertToArr(contents)
  newLineContainer = addLineNumbers(textArr)
  newLineContainer = convertToUpperCase(newLineContainer, 20)
  newLineContainer = convertToLowerCase(newLineContainer, 20)
  newLineContainer = ommitRandom(newLineContainer)
  console.log("==========================================\nOriginal Text\n==========================================\n" + oldText)
  logText(newLineContainer)
})