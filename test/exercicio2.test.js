const { test, expect } = require('@playwright/test');


test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/exercicio2/index.html');

})
test('Verificar se o dropdown carrega corretamente com as opções de frutas e destilados ', async ({page}) => {
  const fruitOptions = await page.locator('#fruta option').allTextContents();
  const expectedFruit = ['Limão', 'Laranja', 'Morango'];
  
  const distilledOptions = await page.locator('#destilado option').allTextContents();
  const expectedDistilled = ['Rum', 'Vodka', 'Gin'];

  expect(fruitOptions).toEqual(expectedFruit);
   expect(distilledOptions).toEqual(expectedDistilled);

  
})

test('Verificar se ao selecionar `Limão` e `Rum`, o drink correto `Daiquiri` é exibido com a descrição e imagem corretas.', async ({page}) => {
  await page.selectOption('#fruta', 'limão');
  await page.selectOption('#destilado', 'rum');
  const btnCreate = await page.getByRole('button', {name: 'Criar Drink'})

  expect(btnCreate).toBeVisible();

  btnCreate.click();

  const drinkName = await page.locator('.drink-item h3').textContent();
  const drinkDescription = await page.locator('.drink-item p').textContent();
  const imgItem = await page.locator('.drink-item img').getAttribute('src');

  expect(drinkName).toEqual('Daiquiri');
  expect(drinkDescription).toEqual('Um clássico refrescante com rum e suco de limão.');
  expect(imgItem).toEqual('https://cdn.pixabay.com/photo/2020/07/05/23/06/daiquiri-5374800_1280.jpg')
});

test('Verificar se ao selecionar Laranja e Vodka, o drink correto Screwdriver é exibido com a descrição e imagem corretas.', async ({page}) => {
  await page.selectOption('#fruta', 'laranja');
  await page.selectOption('#destilado', 'vodka');
  const btnCreate = await page.getByRole('button', {name: 'Criar Drink'})

  expect(btnCreate).toBeVisible();

  btnCreate.click();

  const drinkName = await page.locator('.drink-item h3').textContent();
  const drinkDescription = await page.locator('.drink-item p').textContent();
  const imgItem = await page.locator('.drink-item img').getAttribute('src');

  expect(drinkName).toEqual('Screwdriver');
  expect(drinkDescription).toEqual('Uma mistura simples e deliciosa de vodka com suco de laranja.');
  expect(imgItem).toEqual('https://cdn.pixabay.com/photo/2019/10/07/00/44/glass-4531446_1280.jpg')

});

test('Verificar se ao selecionar Morango e Gin, o drink correto Strawberry Martini é exibido com a descrição e imagem corretas.', async ({page}) => {
  await page.selectOption('#fruta', 'morango');
  await page.selectOption('#destilado', 'gin');
  const btnCreate = await page.getByRole('button', {name: 'Criar Drink'})

  expect(btnCreate).toBeVisible();

  btnCreate.click();

  const drinkName = await page.locator('.drink-item h3').textContent();
  const drinkDescription = await page.locator('.drink-item p').textContent();
  const imgItem = await page.locator('.drink-item img').getAttribute('src');

  expect(drinkName).toEqual('Strawberry Martini');
  expect(drinkDescription).toEqual('Um martini doce e sofisticado com gin e morango.');
  expect(imgItem).toEqual('https://cdn.pixabay.com/photo/2018/12/26/11/41/martini-3895604_1280.jpg');
})
