import { Question } from '../interfaces/question.interface';
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

function renderPanelQuestions(
  panelInformation: HTMLDivElement | null,
  question: Question,
  actualStep: number,
  totalQuestions: number,
  correctAnswers: number
) {
  if (!panelInformation) return;
  applyAnimation(panelInformation, 'animate__flipInX');
  panelInformation.innerHTML = `
    <p class="md:mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all">
      Question ${actualStep} of ${totalQuestions}
    </p>
    <h2 class="md:text-[3rem] text-[3rem] font-medium leading-[100%] text-gray-700 dark:text-white transition-all">
      ${question.question}
    </h2>
     <p class="md:mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all">
        Correct Answers: ${correctAnswers} out of ${totalQuestions} correct! <br />
        It will updated after clicking the continue button.
    </p>
  `;
}

export { renderPanelInformation, renderPanelQuestions };
