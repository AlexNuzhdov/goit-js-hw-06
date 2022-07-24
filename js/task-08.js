
const form = document.querySelector('.login-form'); /*Получаем ссылку на форму*/

form.addEventListener('submit', handleSubmit); /* Обрабатываем отправку формы*/

function handleSubmit(event) {
    event.preventDefault()       /* предотвращаем перезагрузку страницы*/

    const {elements: { email, password }, } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }  /* возвращает параметр мейла и пароля*/
    
    console.log(userDetails)
    event.currentTarget.reset()  /* очищаем значения полей формы */
};