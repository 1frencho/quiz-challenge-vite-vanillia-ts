function renderPanelInformation(panelInformation: HTMLDivElement | null) {
  if (!panelInformation) return;
  panelInformation.classList.add(
    'animate__animated',
    'animate__fadeIn',
    'animate__faster'
  );
  panelInformation.innerHTML = `
    <h1 class="md:text-[4rem] text-[1.8rem] font-extralight leading-[100%] text-gray-700 dark:text-white transition-all"
    >
      Welcome to the <br /><span class="font-medium">Frontend Quiz!</span>
    </h1>
    <p class="mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all"
    >
      Pick a subject to get started.
    </p>
    `;
  setTimeout(() => {
    panelInformation.classList.remove('animate__animated', 'animate__fadeIn');
  }, 500);
}

function renderPanelQuestion(panelInformation: HTMLDivElement | null) {
  if (!panelInformation) return;
  panelInformation.classList.add(
    'animate__animated',
    'animate__fadeIn',
    'animate__faster'
  );
  panelInformation.innerHTML = `
  <p class="mt-8 text-gray-600 text-base md:text-xl dark:text-white transition-all"
  >
    Question 1 of 10
  </p>
  <h2 class="md:text-[3rem] text-[3rem] font-medium leading-[100%] text-gray-700 dark:text-white transition-all"
  >
    What does HTML stand for?
  </h2>`;
  setTimeout(() => {
    panelInformation.classList.remove('animate__animated', 'animate__fadeIn');
  }, 500);
}

export { renderPanelInformation, renderPanelQuestion };
