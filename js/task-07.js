
  const inputRange = document.querySelector("#font-size-control") /*ccылка на инпут*/
  const inputText = document.querySelector("#text")

  const inputEl = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

  inputRange.addEventListener("input", inputEl);