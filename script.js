const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const equalButton = document.querySelector('#equal') // or selectElementById?
const deleteButton = document.querySelector('#delete')
const clearButton = document.querySelector('#clear')
const prevOpTextElement = document.querySelector('#prev-op')
const curOpTextElement = document.querySelector('#cur-op')

// add function

function addition(prevOpTextElement, curOpTextElement) {
  return prevOpTextElement + curOpTextElement
}

// subtract function

function subtraction(prevOpTextElement, curOpTextElement) {
  return prevOpTextElement - curOpTextElement
}

// multiply function

function multiplication(prevOpTextElement, curOpTextElement) {
  return prevOpTextElement * curOpTextElement
}

// divide function

function division(prevOpTextElement, curOpTextElement) {
  return prevOpTextElement / curOpTextElement
}

// function operate - takes operator and two numbers and then calls one of the above functions on the numbers


// function that populates the display
