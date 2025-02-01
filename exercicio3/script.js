import { foods } from '../data.js';

const foodList = document.querySelector('#food-list');
const totalCalories = document.querySelector('#total-calories');
const foodsSelects = document.querySelector('#selected-foods');
let itemsSelected = [];

const updateCalories = () => {
  const soma = itemsSelected.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.calories;
  }, 0);
  totalCalories.innerHTML = soma;
};

const renderSelects = () => {
  foodsSelects.innerHTML = ''; 
  itemsSelected.forEach((item, index) => {
    const divSelected = document.createElement('div');
    divSelected.classList.add('selected-item');

    const p = document.createElement('p');
    p.innerText = item.name;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';

    removeButton.addEventListener('click', () => removeItem(index));

    divSelected.appendChild(p);
    divSelected.appendChild(removeButton);
    foodsSelects.appendChild(divSelected);
  });
};

const renderSoma = (item) => {
  itemsSelected.push(item); 
  updateCalories(); 
  renderSelects(); 
};

const removeItem = (index) => {
  itemsSelected.splice(index, 1); 
  updateCalories(); 
  renderSelects(); 
};

const createFood = (item) => {
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('food-item');

  const img = document.createElement('img');
  img.src = item.image;

  const p = document.createElement('p');
  p.classList.add('food-name');
  p.textContent = item.name;

  const calories = document.createElement('p');
  calories.innerHTML = `Calorias: <span class="calories">${item.calories}</span>`;

  foodDiv.appendChild(img);
  foodDiv.appendChild(p);
  foodDiv.appendChild(calories);

  foodDiv.addEventListener('click', () => renderSoma(item));
  return foodDiv;
};

const renderFoods = (itensFoods) => {
  foodList.innerHTML = ''; 
  const foodElements = itensFoods.map(createFood);
  foodList.append(...foodElements);
};

renderFoods(foods);
