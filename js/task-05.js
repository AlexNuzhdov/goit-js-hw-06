
/* Обьект ссылок*/
const refs = { 
    input: document.querySelector('#name-input'), /*ccылка на инпут*/
    output: document.querySelector('#name-output') /*ccылка на output*/
};
refs.input.addEventListener('input', onInputChange); /*прослушиваем события input(тип события изменяет каждый раз когда изменяется значение инпута(каждое изменения элемента)) и коллбек
событие change только для чекбоксов и радиобаттонов*/

/*читаем значение этого инпута при событии*/
function onInputChange(event) { 
      refs.input = event.currentTarget.value;
      refs.output.textContent = event.currentTarget.value; /* изменяем текст элемента*/
   
};