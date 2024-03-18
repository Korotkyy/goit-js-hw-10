import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onPromiseCreate);
function onPromiseCreate(e) {
  e.preventDefault();
  const radio = form.querySelectorAll("input[type='radio']");
  const delay = e.currentTarget.elements.delay.value;
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      createPromise(delay, radio[i].value);
      break;
    }
  }
}

function createPromise(delay, value) {
  console.log(value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(
          iziToast.show({
            message: `? Fulfilled promise in ms ${delay}`,
          })
        );
      } else {
        reject(
          iziToast.show({
            message: `? Rejected promise in ms ${delay}`,
          })
        );
      }
    }, delay);
  });

  return promise;
}

