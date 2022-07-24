
const inputEl = document.querySelector('#validation-input')
console.log(inputEl.getAttribute('data-length'))

inputEl.addEventListener('blur', event => {
	if (event.target.value.length == inputEl.getAttribute('data-length')) {
		inputEl.classList.add('valid');

		if (inputEl.classList.contains('invalid')) {
			inputEl.classList.remove('invalid')
		};
	} else {
		if (inputEl.classList.contains('valid')) {
			inputEl.classList.remove('valid')
		};
		inputEl.classList.add('invalid')
	}
});