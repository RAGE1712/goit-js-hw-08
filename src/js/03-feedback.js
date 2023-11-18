import { save, load } from './helpers';
import throttle from 'lodash.throttle';

const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener("input", throttle(onFormInput, 500))
refs.formElem.addEventListener('submit', onFormSubmit)

function onFormInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    save(key, value);
}

function onLoad() {
    const email = load('email');
    const message = load('message')
    refs.formElem.elements.email.value = email || "";
    refs.formElem.elements.message.value = message || "";
}
onLoad()

function onFormSubmit(event) {
    event.preventDefault();
    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;

    const obj = {
      email,
      message,
    };
    console.log(obj)

    event.target.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message')
}


