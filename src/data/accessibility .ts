import { Question } from '../interfaces/question.interface';

export const accessibilityQuestions: Question[] = [
  {
    question: 'What is the purpose of the `alt` attribute in an `<img>` tag?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'Provides alternative text for screen readers',
        isCorrect: true,
      },
      { id: 2, answer: "Sets the image's width", isCorrect: false },
      { id: 3, answer: "Sets the image's height", isCorrect: false },
      { id: 4, answer: 'Adds a border around the image', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What role does the `aria-label` attribute serve?',
    possibleAnswers: [
      { id: 1, answer: 'Provides a label for screen readers', isCorrect: true },
      { id: 2, answer: 'Changes the font size', isCorrect: false },
      { id: 3, answer: "Defines the element's color", isCorrect: false },
      { id: 4, answer: "Sets the element's margin", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Which HTML element is commonly used to improve keyboard navigation?',
    possibleAnswers: [
      { id: 1, answer: 'The `&lt;button&gt;` element', isCorrect: true },
      { id: 2, answer: 'The `&lt;div&gt;` element', isCorrect: false },
      { id: 3, answer: 'The `&lt;span&gt;` element', isCorrect: false },
      { id: 4, answer: 'The `&lt;img&gt;` element', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the purpose of using semantic HTML elements?',
    possibleAnswers: [
      { id: 1, answer: 'To improve accessibility and SEO', isCorrect: true },
      { id: 2, answer: 'To reduce the file size', isCorrect: false },
      { id: 3, answer: 'To add color to the text', isCorrect: false },
      { id: 4, answer: 'To create animations', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does the `role` attribute do in ARIA?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'Defines the type of user interface element',
        isCorrect: true,
      },
      {
        id: 2,
        answer: "Sets the element's background color",
        isCorrect: false,
      },
      { id: 3, answer: "Changes the element's font style", isCorrect: false },
      { id: 4, answer: "Sets the element's border width", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      'How can you ensure that a website is accessible to users with low vision?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'Use high-contrast colors and scalable fonts',
        isCorrect: true,
      },
      { id: 2, answer: 'Use small text and bright colors', isCorrect: false },
      { id: 3, answer: 'Avoid using alt text for images', isCorrect: false },
      { id: 4, answer: 'Hide text behind images', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'Why is it important to provide keyboard navigation support?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'To assist users who cannot use a mouse',
        isCorrect: true,
      },
      { id: 2, answer: 'To make the site load faster', isCorrect: false },
      { id: 3, answer: 'To add visual effects', isCorrect: false },
      { id: 4, answer: "To reduce the page's file size", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is a screen reader?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'A tool that reads out text on the screen',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'A program that changes screen colors',
        isCorrect: false,
      },
      { id: 3, answer: 'A tool that speeds up the internet', isCorrect: false },
      { id: 4, answer: 'A device for taking screenshots', isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does the `tabindex` attribute control?',
    possibleAnswers: [
      {
        id: 1,
        answer: 'The order in which elements receive focus',
        isCorrect: true,
      },
      { id: 2, answer: 'The size of the element', isCorrect: false },
      { id: 3, answer: 'The color of the element', isCorrect: false },
      { id: 4, answer: "The element's position on the page", isCorrect: false },
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Which attribute is used to ensure that interactive elements are accessible to screen readers?',
    possibleAnswers: [
      { id: 1, answer: 'aria-label', isCorrect: true },
      { id: 2, answer: 'aria-hidden', isCorrect: false },
      { id: 3, answer: 'aria-role', isCorrect: false },
      { id: 4, answer: 'aria-live', isCorrect: false },
    ],
    correctAnswer: 1,
  },
];
