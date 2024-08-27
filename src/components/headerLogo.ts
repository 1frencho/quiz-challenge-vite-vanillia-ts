import { Subject } from '../interfaces/question.interface';
import { applyAnimation } from '../utils/animate';

export function renderHeaderLogo(
  headerLogo: HTMLDivElement | null,
  path: Subject
) {
  if (!headerLogo) return;
  applyAnimation(headerLogo, 'animate__fadeIn');
  headerLogo.innerHTML = `
    <div class="transition-all mr-3">
      <img src="/img/${path}.svg" alt="HTML" class="transition-all" />
    </div>
    <p
      class="md:text-2xl text-center font-medium text-gray-900 dark:text-white transition-all"
    >
      ${path?.toUpperCase()}
    </p>
  `;
}
