
const refs = { 
	inputEL : document.querySelector('#controls>input'),
	btnDataCreate : document.querySelector('button[data-create]'),
	btnDataDestroy : document.querySelector('button[data-destroy]'),
	boxes : document.querySelector('#boxes')
	
};

function getRandomHexColor() {                               /* функция случайного цвета фона*/
   return `#${Math.floor(Math.random() * 16777215)
   .toString(16)
   .padStart(6, 0)}`;
};

function createBoxes (amount) {          
const elementAdd = []                    
  
 for (let i = 0; i < amount; i++) {  
   const div = document.createElement('div')    
   div.style.width = `${30 + 10 * i}px`         
   div.style.height = `${30 + 10 * i}px`        
	
   div.style.background = getRandomHexColor()   
   elementAdd.push(div)                                             
}   
  return elementAdd                            
};

refs.btnDataCreate.addEventListener('click', () => {
   let boxesAdd = createBoxes(refs.inputEL.value)
   boxes.append(...boxesAdd)
});
console.log(refs.inputEL.value);

const destroyBoxes = () => {
   boxes.innerHTML = ''
};
refs.btnDataDestroy.addEventListener('click', () => {
   destroyBoxes()    
                                 
});

