import { Question } from '../interfaces/question.interface';

export const cssQuestions: Question[] = [
  {
    question: 'What does CSS stand for?',
    possibleAnswers: [
      { id: 1, answer: 'Cascading Style Sheets', isCorrect: true },
      { id: 2, answer: 'Creative Style Sheets', isCorrect: false },
      { id: 3, answer: 'Computer Style Sheets', isCorrect: false },
      { id: 4, answer: 'Colorful Style Sheets', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which property is used to change the background color?',
    possibleAnswers: [
      { id: 1, answer: 'background-color', isCorrect: true },
      { id: 2, answer: 'color', isCorrect: false },
      { id: 3, answer: 'bgcolor', isCorrect: false },
      { id: 4, answer: 'background-style', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you add a shadow to an element in CSS?',
    possibleAnswers: [
      { id: 1, answer: 'box-shadow', isCorrect: true },
      { id: 2, answer: 'shadow', isCorrect: false },
      { id: 3, answer: 'element-shadow', isCorrect: false },
      { id: 4, answer: 'filter-shadow', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which CSS property controls the text size?',
    possibleAnswers: [
      { id: 1, answer: 'font-size', isCorrect: true },
      { id: 2, answer: 'text-style', isCorrect: false },
      { id: 3, answer: 'text-size', isCorrect: false },
      { id: 4, answer: 'font-weight', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      'How do you make each word in a text start with a capital letter?',
    possibleAnswers: [
      { id: 1, answer: 'text-transform: capitalize;', isCorrect: true },
      { id: 2, answer: 'text-transform: uppercase;', isCorrect: false },
      { id: 3, answer: 'transform: capitalize;', isCorrect: false },
      { id: 4, answer: 'font-style: capitalize;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you create a flex container in CSS?',
    possibleAnswers: [
      { id: 1, answer: 'display: flex;', isCorrect: true },
      { id: 2, answer: 'flex: container;', isCorrect: false },
      { id: 3, answer: 'display: block;', isCorrect: false },
      { id: 4, answer: 'container: flex;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which property is used to change the font of an element?',
    possibleAnswers: [
      { id: 1, answer: 'font-family', isCorrect: true },
      { id: 2, answer: 'font-style', isCorrect: false },
      { id: 3, answer: 'font-weight', isCorrect: false },
      { id: 4, answer: 'font-size', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'How do you make a list that lists its items with squares?',
    possibleAnswers: [
      { id: 1, answer: 'list-style-type: square;', isCorrect: true },
      { id: 2, answer: 'list-type: square;', isCorrect: false },
      { id: 3, answer: 'list: square;', isCorrect: false },
      { id: 4, answer: 'list-style: square;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which CSS property is used to change the text color?',
    possibleAnswers: [
      { id: 1, answer: 'color', isCorrect: true },
      { id: 2, answer: 'text-color', isCorrect: false },
      { id: 3, answer: 'font-color', isCorrect: false },
      { id: 4, answer: 'background-color', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    possibleAnswers: [
      { id: 1, answer: '#header', isCorrect: true },
      { id: 2, answer: '.header', isCorrect: false },
      { id: 3, answer: 'header', isCorrect: false },
      { id: 4, answer: '*header', isCorrect: false },
    ],
    correctAnswer: 1,
  },
];
