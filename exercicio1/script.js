

import {foods} from '../data.js'
const foodGallery = document.querySelector('#food-gallery');
const foodFilter = document.getElementById('food-filter');


const createFood = (item) => {
  const foodDiv = document.createElement('div'); 
  foodDiv.classList.add('food-item'); 

  const img = document.createElement('img'); 
  img.src = item.image;

  const p = document.createElement('p'); 
  p.textContent = item.name;

  foodDiv.appendChild(img); 
  foodDiv.appendChild(p); 

  return foodDiv; 
};


const renderFoods = (itensFoods) => {
  foodGallery.innerHTML = '';
  const foodElements = itensFoods.map(createFood); 
  foodGallery.append(...foodElements); 
}

const filteredFoods = (filter) => {
  const filteredFoods = foods.filter(food => filter === 'all' || food.tipo === filter);
  renderFoods(filteredFoods);
};

foodFilter.addEventListener('change', (event) => {
  filteredFoods(event.target.value);
});

renderFoods(foods);



// const renderFoods = (itensFoods) => {
//   foodGallery.innerHTML = ''
//   itensFoods.forEach((item) => {
//     const foodElement = createFood(item); 
//     foodGallery.appendChild(foodElement); 
//   });

// }

// const filteredFoods = (filter) => {
//   const filteredFoods = foods.filter(food => filter === 'all' || food.tipo === filter);
//   foodGallery.innerHTML = ''
//   renderFoods(filteredFoods)
// }

// foodFilter.addEventListener('change', (event) => {
//     filteredFoods(event.target.value);
// });

// renderFoods(foods)
