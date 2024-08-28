import { Question } from '../interfaces/question.interface';

export const jsQuestions: Question[] = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    possibleAnswers: [
      { id: 1, answer: "&lt;script src='app.js'&gt;", isCorrect: true },
      { id: 2, answer: "&lt;script href='app.js'&gt;", isCorrect: false },
      { id: 3, answer: "&lt;script ref='app.js'&gt;", isCorrect: false },
      { id: 4, answer: "&lt;script name='app.js'&gt;", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    possibleAnswers: [
      { id: 1, answer: "alert('Hello World');", isCorrect: true },
      { id: 2, answer: "msg('Hello World');", isCorrect: false },
      { id: 3, answer: "alertBox('Hello World');", isCorrect: false },
      { id: 4, answer: "msgBox('Hello World');", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you create a function in JavaScript?',
    possibleAnswers: [
      { id: 1, answer: 'function myFunction()', isCorrect: true },
      { id: 2, answer: 'function:myFunction()', isCorrect: false },
      { id: 3, answer: 'function = myFunction()', isCorrect: false },
      { id: 4, answer: 'myFunction function()', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you call a function named 'myFunction'?",
    possibleAnswers: [
      { id: 1, answer: 'myFunction()', isCorrect: true },
      { id: 2, answer: 'call function myFunction()', isCorrect: false },
      { id: 3, answer: 'call myFunction()', isCorrect: false },
      { id: 4, answer: 'execute myFunction()', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How can you add a comment in JavaScript?',
    possibleAnswers: [
      { id: 1, answer: '// This is a comment', isCorrect: true },
      { id: 2, answer: '&lt;!-- This is a comment --&gt;', isCorrect: false },
      { id: 3, answer: '&#39;This is a comment&#39;', isCorrect: false },
      { id: 4, answer: '** This is a comment **', isCorrect: false },
    ],
    correctAnswer: 1,
  },

  {
    question: 'What is the correct way to write a JavaScript array?',
    possibleAnswers: [
      {
        id: 1,
        answer: "var colors = ['red', 'green', 'blue']",
        isCorrect: true,
      },
      {
        id: 2,
        answer: "var colors = 'red', 'green', 'blue'",
        isCorrect: false,
      },
      {
        id: 3,
        answer: "var colors = (1:'red', 2:'green', 3:'blue')",
        isCorrect: false,
      },
      {
        id: 4,
        answer: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        isCorrect: false,
      },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you round the number 7.25 to the nearest integer?',
    possibleAnswers: [
      { id: 1, answer: 'Math.round(7.25)', isCorrect: true },
      { id: 2, answer: 'Math.rnd(7.25)', isCorrect: false },
      { id: 3, answer: 'round(7.25)', isCorrect: false },
      { id: 4, answer: 'Math.roundNum(7.25)', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you find the largest number of 2 and 4?',
    possibleAnswers: [
      { id: 1, answer: 'Math.max(2, 4)', isCorrect: true },
      { id: 2, answer: 'ceil(2, 4)', isCorrect: false },
      { id: 3, answer: 'Math.ceil(2, 4)', isCorrect: false },
      { id: 4, answer: 'top(2, 4)', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    possibleAnswers: [
      { id: 1, answer: 'onclick', isCorrect: true },
      { id: 2, answer: 'onchange', isCorrect: false },
      { id: 3, answer: 'onmouseclick', isCorrect: false },
      { id: 4, answer: 'onmouseover', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you declare a JavaScript variable?',
    possibleAnswers: [
      { id: 1, answer: 'var x', isCorrect: true },
      { id: 2, answer: 'variable x', isCorrect: false },
      { id: 3, answer: 'v x', isCorrect: false },
      { id: 4, answer: 'x = var', isCorrect: false },
    ],
    correctAnswer: 1,
  },
];
