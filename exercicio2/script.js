import {drinks} from '../data.js'
const resultado = document.querySelector('#resultado');
const buttonSelect = document.querySelector('#criarDrink');

const createDrinkItem = (item) => {
  const drinkDiv = document.createElement('div'); 
  drinkDiv.classList.add('drink-item'); 

  const img = document.createElement('img'); 
  img.src = item.image;

  const boxTexts = document.createElement('div');
  boxTexts.classList.add('drink-item-box-texts');

  const title = document.createElement('h3'); 
  title.textContent = item.name;

  const description = document.createElement('p');
  description.textContent = item.description;

  drinkDiv.appendChild(img); 
  boxTexts.appendChild(title);
  boxTexts.appendChild(description); 
  drinkDiv.appendChild(boxTexts);

  return drinkDiv; 
}

const findDrinks = () => {
  const frutaSelect = document.querySelector('#fruta').value;
  const distilledSelect = document.querySelector('#destilado').value;

  resultado.innerHTML = '';
  const drinkSelect = drinks.find((item) => item.fruit === frutaSelect && item.distilled === distilledSelect);
  console.log( 'teste');
  console.log(drinkSelect, 'drink selecionado');
  console.log(frutaSelect);
  
  
  resultado.appendChild(createDrinkItem(drinkSelect));
}

buttonSelect.addEventListener('click', findDrinks)