const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  return (item);
});

elementsList.append(...elements);

