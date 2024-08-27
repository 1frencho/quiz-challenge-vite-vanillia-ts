import { applyAnimation } from '../utils/animate';

function renderPanelInformation(panelInformation: HTMLDivElement | null) {
  if (!panelInformation) return;
  applyAnimation(panelInformation, 'animate__flipInX');
  panelInformation.innerHTML = `
    <h1 class="md:text-[3rem] text-[3rem] font-extralight leading-[100%] text-gray-700 dark:text-white transition-all">
      Welcome to the <br /><span class="font-medium">Frontend Quiz!</span>
    </h1>
    <p class="mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all">
      Pick a subject to get started.
    </p>
  `;
}

function renderPanelQuestions(panelInformation: HTMLDivElement | null) {
  if (!panelInformation) return;
  applyAnimation(panelInformation, 'animate__flipInX');
  panelInformation.innerHTML = `
    <p class="md:mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all">
      Question 1 of 10
    </p>
    <h2 class="md:text-[3rem] text-[3rem] font-medium leading-[100%] text-gray-700 dark:text-white transition-all">
      What does HTML stand for?
    </h2>
  `;
}

export { renderPanelInformation, renderPanelQuestions };
