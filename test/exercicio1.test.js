const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/exercicio1/index.html');

});

test('Verificar se o dropdown carrega corretamente com as opções', async ({ page }) => {
  const optionsSelect = await page.locator('#food-filter option').allTextContents();

  const expectedOptions = ['Todos', 'Frutas', 'Comidas', 'Doces',]

  expect(optionsSelect).toEqual(expectedOptions);

});

test('Verificar se ao selecionar `Frutas`, mostra as 3 opções existentes', async ({ page }) => {
  await page.selectOption('#food-filter', 'fruits');

  const foodsItems = await page.locator('#food-gallery div').allTextContents();
  const expectedItems = ['Maçã', 'Banana', 'Laranja'];

  expect(foodsItems).toEqual(expectedItems);

});

test('Verificar se ao selecionar `Comidas`, mostra as 5 opções existentes ', async ({ page }) => {
  await page.selectOption('#food-filter', 'meals');

  const foodsItems = await page.locator('#food-gallery div').allTextContents();
  const expectedItems = ['Frango Grelhado (100g)', 'Arroz Cozido (100g)', 'Pizza', 'Hambúrguer', 'Sushi']

  expect(foodsItems).toEqual(expectedItems);

});


test('Verificar se ao selecionar `Doces`, mostra as 3 opções existentes', async ({ page }) => {
  await page.selectOption('#food-filter', 'desserts');

  const foodsItems = await page.locator('#food-gallery div').allTextContents();
  const expectedItems = ['Sorvete', 'Bolo', 'Chocolate'];

  expect(foodsItems).toEqual(expectedItems);

});
