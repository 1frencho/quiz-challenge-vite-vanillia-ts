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
      { id: 1, answer: '&lt;h1&gt;', isCorrect: true },
      { id: 2, answer: '&lt;h6&gt;', isCorrect: false },
      { id: 3, answer: '&lt;head&gt;', isCorrect: false },
      { id: 4, answer: '&lt;heading&gt;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which attribute is used to specify a link's destination in an &lt;a&gt; tag?",
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
      { id: 1, answer: '&lt;br&gt;', isCorrect: true },
      { id: 2, answer: '&lt;lb&gt;', isCorrect: false },
      { id: 3, answer: '&lt;break&gt;', isCorrect: false },
      { id: 4, answer: '&lt;line&gt;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which HTML element is used for creating an unordered list?',
    possibleAnswers: [
      { id: 1, answer: '&lt;ul&gt;', isCorrect: true },
      { id: 2, answer: '&lt;ol&gt;', isCorrect: false },
      { id: 3, answer: '&lt;li&gt;', isCorrect: false },
      { id: 4, answer: '&lt;list&gt;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which tag is used to create a hyperlink in HTML?',
    possibleAnswers: [
      { id: 1, answer: '&lt;a&gt;', isCorrect: true },
      { id: 2, answer: '&lt;link&gt;', isCorrect: false },
      { id: 3, answer: '&lt;href&gt;', isCorrect: false },
      { id: 4, answer: '&lt;url&gt;', isCorrect: false },
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
      { id: 1, answer: '&lt;tr&gt;', isCorrect: true },
      { id: 2, answer: '&lt;td&gt;', isCorrect: false },
      { id: 3, answer: '&lt;th&gt;', isCorrect: false },
      { id: 4, answer: '&lt;row&gt;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which HTML element is used to define emphasized text?',
    possibleAnswers: [
      { id: 1, answer: '&lt;em&gt;', isCorrect: true },
      { id: 2, answer: '&lt;i&gt;', isCorrect: false },
      { id: 3, answer: '&lt;strong&gt;', isCorrect: false },
      { id: 4, answer: '&lt;b&gt;', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does the &lt;title&gt; element in HTML do?',
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
