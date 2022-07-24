
const button = {
    inc: document.querySelector("[data-action='increment']"),
    dec: document.querySelector("[data-action='decrement']"),
    val: document.querySelector('#value'),
    // count: document.querySelector('#counter'),
  };

  let counterValue = 0;

  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  button.inc.addEventListener('click', increment);
  button.dec.addEventListener('click', decrement);