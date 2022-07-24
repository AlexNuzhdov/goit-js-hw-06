
const Input = document.querySelector('#validation-input')
console.log(Input.getAttribute('data-length'))

Input.addEventListener('blur', event => {
	if (event.target.value.length == Input.getAttribute('data-length')) {
		Input.classList.add('valid');

		if (Input.classList.contains('invalid')) {
			Input.classList.remove('invalid')
		};
	} else {
		if (Input.classList.contains('valid')) {
			Input.classList.remove('valid')
		};
		Input.classList.add('invalid')
	}
});