import { accessibilityQuestions } from '../data/accessibility ';
import { cssQuestions } from '../data/css';
import { htmlQuestions } from '../data/html';
import { jsQuestions } from '../data/javascript';
import { LANGUAGE_SELECTION } from '../data/languages';
import { Answer, Question, Subject } from '../interfaces/question.interface';
import { handlePath } from '../main';
import { applyAnimation } from '../utils/animate';
import { shuffleArray } from '../utils/shuffle';
import { renderPanelQuestions } from './panelInfo';
import confetti from 'canvas-confetti';
import { showCustomToast } from './sweetAlert';

let language: Subject | null = null;
let questions: Question[] = [];
let actualStep = 0;
let correctAnswers = 0;

// Has option selected;
let optionSelected = false;

export function renderOptions(
  panelSelection: HTMLUListElement | null,
  panelInformation: HTMLDivElement | null
) {
  if (!panelSelection) return;
  panelSelection.innerHTML = '';
  applyAnimation(panelSelection, 'animate__fadeIn');

  LANGUAGE_SELECTION.forEach((language) => {
    panelSelection.innerHTML += `
      <li class="w-full transition-all">
        <button
          type="button"
          class="select-language flex items-center w-full p-4 md:p-6 bg-white border border-gray-200 rounded-3xl shadow-md hover:bg-gray-100 dark:bg-[#3b4d66] dark:border-gray-700 dark:hover:bg-gray-700"
          data-language="${language.name.toLowerCase()}"
        >
          <img
            src="${language.img}"
            alt="${language.name}"
            class="w-8 h-8 md:w-10 md:h-10 mr-6 transition-all bg-[${
              language.color
            }] rounded-full"
          />
          <p class="text-base md:text-2xl font-medium text-gray-900 dark:text-white transition-all">
            ${language.name}
          </p>
        </button>
      </li>
    `;
  });

  // Casting each element to HTMLButtonElement to access dataset
  const buttons = panelSelection.querySelectorAll('button[data-language]');
  buttons.forEach((button) => {
    const languageButton = button as HTMLButtonElement;
    languageButton.addEventListener('click', () => {
      const language = languageButton.dataset.language as
        | 'html'
        | 'css'
        | 'javascript'
        | 'accessibility';
      handleLanguageSelection(language, panelInformation, panelSelection);
    });
  });
}

export function renderAnswers(
  panelSelection: HTMLUListElement | null,
  panelInformation: HTMLDivElement | null,
  answers: Answer[],
  question: Question[],
  subject: Subject
) {
  if (!panelSelection) return;
  panelSelection.innerHTML = '';
  applyAnimation(panelSelection, 'animate__fadeIn');
  const shuffleAnswers = shuffleArray(answers);
  language = subject;
  shuffleAnswers.forEach((answer, index) => {
    panelSelection.innerHTML += `
      <li class="w-full transition-all">
        <button
          type="button"
          class="select-answer flex items-center w-full p-4 md:p-6 bg-white border-4 hover:border-[#a729f5] border-gray-200 rounded-3xl shadow-md hover:bg-gray-100 dark:bg-[#3b4d66] dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-[#a729f5] transition-all duration-150"
          data-id-answer="${answer.id}"
        >
          <span class="inline-flex items-center justify-center w-8 h-8 mr-4 text-base font-medium text-white bg-[#f6e7ff] rounded-lg md:w-10 md:h-10 transition-all duration-150 select-none hover:bg-[#a729f5] group-hover:bg-[#a729f5] ">
            ${index + 1}
          </span>
          <p class="text-base md:text-2xl font-medium text-gray-900 dark:text-white transition-all">
            ${answer.answer}
          </p>
        </button>
      </li>
    `;
  });

  // Casting each element to HTMLButtonElement to access dataset
  const buttons = panelSelection.querySelectorAll('button[data-id-answer]');

  // Show continue button
  const divButton = document.createElement('div');
  divButton.classList.add('flex', 'items-center', 'justify-center');
  renderButton(divButton);

  buttons.forEach((button) => {
    const answerButton = button as HTMLButtonElement;
    answerButton.addEventListener('click', () => {
      if (optionSelected) {
        return;
      }
      const answerId = answerButton.dataset.idAnswer;
      const isCorrect = question[actualStep].correctAnswer == Number(answerId);
      optionSelected = true;
      changeButtonClass(buttons, question);
      if (isCorrect) {
        showCustomToast('top', 'Correct Answer!', 'green');
        confettiStars();
        correctAnswers++;
      } else {
        showCustomToast('top', 'Wrong Answer!', 'red');
      }

      // Check if actualStep is less than totalQuestions
      if (actualStep < question.length - 1) {
        panelSelection.appendChild(divButton);
      } else {
        // TODO: Show congratulations
        showCustomToast(
          'top',
          `Quiz Completed! \n ${correctAnswers} out of ${question.length} correct! \n You can play again by clicking the home button.`,
          'green',
          3500
        );
        confettiStars();
        actualStep = 0;
      }

      const continueButton = document.querySelector('#continueBtn');
      actualStep++;
      // console.log(language);
      // Continue event
      if (continueButton) {
        continueButton.addEventListener('click', () => {
          optionSelected = false;
          // Because it starts at 0 -> -1
          if (actualStep < question.length) {
            language = language;
            handleLanguageSelection(
              language ?? 'home',
              panelInformation,
              panelSelection
            );
            // console.log(actualStep);
          }
        });
      }
    });
  });
}

// Wrong Answer
export function changeButtonClass(
  buttons: NodeListOf<HTMLButtonElement | Element>,
  question: Question[]
) {
  buttons.forEach((button) => {
    const answerButton = button as HTMLButtonElement;
    if (
      question[actualStep].correctAnswer ==
      Number(answerButton.dataset.idAnswer)
    ) {
      button.classList.add(
        'border-4',
        'border-green-400',
        'dark:border-4',
        'dark:border-green-500'
      );
    } else {
      button.classList.add(
        'border-4',
        'border-red-400',
        'dark:border-4',
        'dark:border-red-500'
      );
    }
  });
}

// Handle language selection on subject selection - SelectionPanel
export function handleLanguageSelection(
  language: Subject,
  panelInformation: HTMLDivElement | null,
  panelSelection: HTMLUListElement | null
) {
  if (!panelInformation) return;
  language = language;
  handlePath(language);

  switch (language) {
    case 'html':
      questions = htmlQuestions;
      break;
    case 'css':
      questions = cssQuestions;
      break;
    case 'javascript':
      questions = jsQuestions;
      break;
    case 'accessibility':
      questions = accessibilityQuestions;
      break;
    default:
      break;
  }
  // First: HTML Element, give current question, actualStep of 10 questions length, totalQuestions
  // Current step start at 0
  // console.log(questions);
  renderPanelQuestions(
    panelInformation,
    questions[actualStep],
    actualStep + 1,
    questions.length,
    correctAnswers
  );
  // console.log(actualStep);

  const possibleAnswers = questions[actualStep].possibleAnswers;
  // HTML Element, Possible Answers with shuffle array and finally question for selected subject.
  renderAnswers(
    panelSelection,
    panelInformation,
    possibleAnswers,
    questions,
    language
  );
}

export const confettiStars = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
  });
};

export function renderButton(divButton: HTMLDivElement) {
  divButton.innerHTML = `
    <button
      id="continueBtn"
      class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#3b4d66] rounded-md group-hover:bg-opacity-0"
        >Continue</span
      >
    </button>
  `;
}

export function resetGame() {
  language = null;
  questions = [];
  actualStep = 0;
  correctAnswers = 0;
  optionSelected = false;
}
