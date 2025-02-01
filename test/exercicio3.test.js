const { test, expect } = require('@playwright/test');
test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/exercicio3/index.html');
});

test('Verifica se a lista de alimentos carrega corretamente', async ({page}) => {
  const foodItems = await page.locator('.food-item .food-name').allTextContents();
  const expectedItems = [
    "Maçã", "Banana", "Frango Grelhado (100g)", "Arroz Cozido (100g)", 
    "Feijão Cozido (100g)", "Salada de Alface (100g)", "Azeite (1 colher de sopa)", 
    "Pão Integral (1 fatia)", "Laranja", "Pizza", "Hambúrguer", "Sushi", 
    "Sorvete", "Bolo", "Chocolate"
  ];
  
  expect(foodItems).toEqual(expectedItems);
  
});

test('Verifica se ao selecionar um alimento, ele é adicionado à lista de selecionados.', async ({page}) => {
  await page.locator('.food-item:has-text("Maçã")').click();
  const selectedFood = await page.locator('#selected-foods .selected-item p').allTextContents();
  
  expect(selectedFood).toContain('Maçã');
});

test('Verifica se ao selecionar múltiplos alimentos, o total de calorias é atualizado corretamente.', async({page}) => {
  await page.locator('.food-item:has-text("Maçã")').click();
  await page.locator('.food-item:has-text("Banana")').click();
  const totalCalories = await page.locator('#total-calories').textContent();

  expect(totalCalories).toEqual('200');
});

test('Verifica se ao remover um alimento, o total de calorias é atualizado corretamente', async ({page}) => {
  await page.click('.food-item:has-text("Maçã")');
  await page.click('.food-item:has-text("Banana")');
  await page.click('#selected-foods .selected-item:has-text("Maçã") button');

  const totalCalories = await page.locator('#total-calories').textContent();

  expect(totalCalories).toEqual('105');

})

