import Swal from 'sweetalert2';

export function showCustomToast(
  position: 'top' | 'center' | 'bottom',
  title: string,
  color: string = '#333',
  timer: number = 3000,
  timerProgressBar?: boolean
) {
  Swal.fire({
    toast: true,
    position,
    title,
    background: '#fff' /* Color de fondo blanco */,
    color /* Color del texto oscuro */,
    showConfirmButton: false,
    timer,
    timerProgressBar,
    customClass: {
      popup: 'swal2-toast',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
}
