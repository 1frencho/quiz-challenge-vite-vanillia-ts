import './assets/css/style.css';
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { toggleDarkModeOnLoad } from './components/ToggleDark';
import { renderOptions } from './components/optionSelect';
import { renderPanelInformation } from './components/panelInfo';
import 'animate.css';

const path = window.location.pathname.split('/');

const toggle = document.querySelector<HTMLInputElement>('#toggleDarkMode');

const panelSelection =
  document.querySelector<HTMLUListElement>('#panel-selection');

const panelInformation =
  document.querySelector<HTMLDivElement>('#panel-information');

const homeBtn = document.querySelector<HTMLButtonElement>('#homeBtn');

function defaultStart() {
  renderOptions(panelSelection, panelInformation);
  renderPanelInformation(panelInformation);
  document.documentElement.classList.remove('hidden');
}

addEventListener('DOMContentLoaded', () => {
  // Dark mode: Event listener
  toggleDarkModeOnLoad(toggle);
  // Go to home page
  defaultStart();

  homeBtn?.addEventListener('click', () => {
    if (path[1] === '') return;
    handlePath('');
    defaultStart();
  });
});

export function handlePath(pathName: string) {
  path.pop();
  path.push(pathName);
  window.history.replaceState(null, '', path.join('/'));
}

console.log(path);
