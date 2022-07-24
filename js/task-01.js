const totalCategories = document.querySelectorAll(".item "); /* ссылка на все  item */

console.log(`Number of categories:  ${totalCategories.length}`); /*находим количество элементов*/

const newArray = [...totalCategories] /* создает новый массив*/

  .map(categories => `Category: ${categories.children[0].textContent}
  Elements: ${categories.children[1].children.length}`
  )
  .join("\n "); /* переносит на новую строку*/
  
console.log(newArray);
