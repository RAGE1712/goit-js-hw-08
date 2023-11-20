import { save, load } from './helpers';
import throttle from 'lodash.throttle';

const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener("input", throttle(onFormInput, 500))
refs.formElem.addEventListener('submit', onFormSubmit)



function onFormInput(event) {
    const emailValue = refs.formElem.elements.email.value;
    const messageValue = refs.formElem.elements.message.value; 
    const formValueObj = {
      email: emailValue,
      message : messageValue
    }
  const value = formValueObj;
  const key = 'feedback-form-state';
    save(key, value);
}

function onLoad() {
    const formValueObj = load('feedback-form-state');
    refs.formElem.elements.email.value = formValueObj.email || '';
    refs.formElem.elements.message.value = formValueObj.message || '';
}
onLoad()

function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value; 
  
    if (email === '' || message === '') {
      alert('Всі поля повинні бути заповнені!');
    } else {
     
       const obj = {
        email,
        message,
      };
      console.log(obj);

      event.target.reset();
      localStorage.removeItem('feedback-form-state');
    }   
}


