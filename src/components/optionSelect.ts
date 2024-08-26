import { LANGUAGE_SELECTION } from '../data/languages';
import { handlePath } from '../main';
import { renderPanelQuestion } from './panelInfo';

export function handleLanguageSelection(
  language: 'html' | 'css' | 'js' | 'accessibility',
  panelInformation: HTMLDivElement | null
) {
  if (!panelInformation) return;
  renderPanelQuestion(panelInformation);
  handlePath(language);
}

export function renderOptions(
  panelSelection: HTMLUListElement | null,
  panelInformation: HTMLDivElement | null
) {
  if (!panelSelection) return;
  panelSelection.innerHTML = '';
  LANGUAGE_SELECTION.forEach((language) => {
    panelSelection.innerHTML += `
      <li class="w-full transition-all">
        <button
          type="button"
          class="select-language flex items-center w-full p-6 bg-white border border-gray-200 rounded-3xl shadow-md hover:bg-gray-100 dark:bg-[#3b4d66] dark:border-gray-700 dark:hover:bg-gray-700"
          data-language="${language.name.toLowerCase()}"
        >
          <img
            src="${language.img}"
            alt="${language.name}"
            class="mr-6 transition-all bg-[${language.color}]"
          />
          <p class="md:text-2xl font-medium text-gray-900 dark:text-white transition-all"
          >
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
        | 'js'
        | 'accessibility';
      handleLanguageSelection(language, panelInformation);
    });
  });
}
