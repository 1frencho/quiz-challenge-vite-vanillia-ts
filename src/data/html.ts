import { Question } from '../interfaces/question.interface';

export const htmlQuestions: Question[] = [
  {
    question: 'What does HTML stand for?',
    possibleAnswers: [
      { id: 1, answer: 'Hyper Text Markup Language', isCorrect: true },
      { id: 2, answer: 'Home Tool Markup Language', isCorrect: false },
      {
        id: 3,
        answer: 'Hyperlinks and Text Markup Language',
        isCorrect: false,
      },
      { id: 4, answer: 'Hyper Tool Markup Language', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which HTML element is used to define the largest heading?',
    possibleAnswers: [
      { id: 1, answer: '<h1>', isCorrect: true },
      { id: 2, answer: '<h6>', isCorrect: false },
      { id: 3, answer: '<head>', isCorrect: false },
      { id: 4, answer: '<heading>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which attribute is used to specify a link's destination in an <a> tag?",
    possibleAnswers: [
      { id: 1, answer: 'href', isCorrect: true },
      { id: 2, answer: 'src', isCorrect: false },
      { id: 3, answer: 'link', isCorrect: false },
      { id: 4, answer: 'url', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the correct HTML element for inserting a line break?',
    possibleAnswers: [
      { id: 1, answer: '<br>', isCorrect: true },
      { id: 2, answer: '<lb>', isCorrect: false },
      { id: 3, answer: '<break>', isCorrect: false },
      { id: 4, answer: '<line>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which HTML element is used for creating an unordered list?',
    possibleAnswers: [
      { id: 1, answer: '<ul>', isCorrect: true },
      { id: 2, answer: '<ol>', isCorrect: false },
      { id: 3, answer: '<li>', isCorrect: false },
      { id: 4, answer: '<list>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which tag is used to create a hyperlink in HTML?',
    possibleAnswers: [
      { id: 1, answer: '<a>', isCorrect: true },
      { id: 2, answer: '<link>', isCorrect: false },
      { id: 3, answer: '<href>', isCorrect: false },
      { id: 4, answer: '<url>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: "Which attribute is used to specify an image's source?",
    possibleAnswers: [
      { id: 1, answer: 'src', isCorrect: true },
      { id: 2, answer: 'href', isCorrect: false },
      { id: 3, answer: 'img', isCorrect: false },
      { id: 4, answer: 'source', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which element is used to define a table row in HTML?',
    possibleAnswers: [
      { id: 1, answer: '<tr>', isCorrect: true },
      { id: 2, answer: '<td>', isCorrect: false },
      { id: 3, answer: '<th>', isCorrect: false },
      { id: 4, answer: '<row>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which HTML element is used to define emphasized text?',
    possibleAnswers: [
      { id: 1, answer: '<em>', isCorrect: true },
      { id: 2, answer: '<i>', isCorrect: false },
      { id: 3, answer: '<strong>', isCorrect: false },
      { id: 4, answer: '<b>', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does the <title> element in HTML do?',
    possibleAnswers: [
      {
        id: 1,
        answer: "Specifies the document's title in the browser tab",
        isCorrect: true,
      },
      { id: 2, answer: 'Specifies the title of the content', isCorrect: false },
      { id: 3, answer: 'Adds a header to the document', isCorrect: false },
      { id: 4, answer: 'Defines the title of an image', isCorrect: false },
    ],
    correctAnswer: 1,
  },
];
