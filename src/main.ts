import './assets/css/style.css';
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { toggleDarkModeOnLoad } from './components/ToggleDark';
import { renderOptions, resetGame } from './components/optionSelect';
import { renderPanelInformation } from './components/panelInfo';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'animate.css';
import './assets/css/sweetalerts.css';
import { renderHeaderLogo } from './components/headerLogo';
import { Subject } from './interfaces/question.interface';
// Document references
const path = window.location.pathname.split('/');
document.documentElement.style.setProperty('--animate-duration', '.8s');

const headerLogo = document.querySelector<HTMLDivElement>('#header-logo');
const toggle = document.querySelector<HTMLInputElement>('#toggleDarkMode');

const panelSelection =
  document.querySelector<HTMLUListElement>('#panel-selection');

const panelInformation =
  document.querySelector<HTMLDivElement>('#panel-information');

const homeBtn = document.querySelector<HTMLButtonElement>('#homeBtn');

export function defaultStart() {
  // All animations will take half the time to accomplish
  resetGame();
  handlePath('home');
  renderOptions(panelSelection, panelInformation);
  renderPanelInformation(panelInformation);
  // By default, the page is hidden
  document.documentElement.classList.remove('hidden');
}

addEventListener('DOMContentLoaded', () => {
  // Dark mode: Event listener and save in local storage
  toggleDarkModeOnLoad(toggle);
  // Go to home page
  defaultStart();

  homeBtn?.addEventListener('click', () => {
    if (path[1] === 'home') return;
    defaultStart();
  });
});

export function handlePath(pathName: Subject) {
  path.pop();
  path.push(pathName);
  window.history.replaceState(null, '', path.join('/'));
  renderHeaderLogo(headerLogo, pathName);
}
