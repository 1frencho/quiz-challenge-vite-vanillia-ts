export function applyAnimation(
  element: any,
  animation:
    | 'animate__fadeIn'
    | 'animate__fadeOut'
    | 'animate__flipInX'
    | 'animate__flipOutX',
  duration: number = 500
) {
  element.classList.add('animate__animated', animation, 'animate__faster');
  setTimeout(() => {
    element.classList.remove('animate__animated', animation);
  }, duration);
}
