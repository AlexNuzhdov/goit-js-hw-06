const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientlist = document.querySelector('#ingredients') /* получаем ссылку на ul*/
const liArray = []  /* создаем новый массив*/

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	
  item.classlist = ('item'); /* добавляем класс item*/
	item.textContent = ingredient; /* добавляем название элементов*/

	liArray.push(item) /* пушим */

  ingredientlist.append(...liArray) /* вставляем  в конец элемента */

  

});