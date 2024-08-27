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
  answers: Answer[]
) {
  if (!panelSelection) return;
  panelSelection.innerHTML = '';
  applyAnimation(panelSelection, 'animate__fadeIn');
  const shuffleAnswers = shuffleArray(answers);
  shuffleAnswers.forEach((answer, index) => {
    panelSelection.innerHTML += `
      <li class="w-full transition-all">
        <button
          type="button"
          class="select-answer flex items-center w-full p-4 md:p-6 bg-white border-4 hover:border-[#a729f5] border-gray-200 rounded-3xl shadow-md hover:bg-gray-100 dark:bg-[#3b4d66] dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-[#a729f5] transition-all duration-150"
          data-answer="${answer.id}"
        >
          <span class="inline-flex items-center justify-center w-8 h-8 mr-4 text-base font-medium text-white bg-[#f6e7ff] rounded-lg md:w-10 md:h-10 transition-all duration-150 select-none hover:bg-[#a729f5] group-hover:bg-[#a729f5]">
            ${index + 1}
          </span>
          <p class="text-base md:text-2xl font-medium text-gray-900 dark:text-white transition-all">
            ${answer.answer}
          </p>
        </button>
      </li>
    `;
  });
}

// Handle language selection on subject selection - SelectionPanel
export function handleLanguageSelection(
  language: Subject,
  panelInformation: HTMLDivElement | null,
  panelSelection: HTMLUListElement | null
) {
  if (!panelInformation) return;
  renderPanelQuestions(panelInformation);
  handlePath(language);
  let questions: Question[] = [];
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
  const possibleAnswers = questions[0].possibleAnswers;
  console.log(possibleAnswers);
  renderAnswers(panelSelection, possibleAnswers);
}
