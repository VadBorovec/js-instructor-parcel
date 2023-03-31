import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  inputName: document.querySelector('.js-feedback-form  input'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 2000));
refs.form.addEventListener('input', throttle(onInput, 1000));

populateTextarea();

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const message = JSON.stringify(formData);
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedMessage);
  // console.log(parsedData);
  // console.dir(refs.form[0].value);
  console.log(parsedData);
  if (savedMessage) {
    refs.inputName.value = parsedData.name;
    refs.textarea.value = parsedData.message;
  }
}
