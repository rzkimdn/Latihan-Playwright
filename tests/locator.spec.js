// @ts-check
const { test, expect } = require('@playwright/test');

test('locator and assertions', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  const buttonAddtochart = page.locator("#add-to-cart-sauce-labs-backpack");
  await buttonAddtochart.click();

  const buttonAddtochart1 = page.locator("#add-to-cart-sauce-labs-bike-light");
  await buttonAddtochart1.click();

  const buttonAddtochart2 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
  await buttonAddtochart2.click();

  const buttonAddtochart3 = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
  await buttonAddtochart3.click();

  const buttonAddtochart4 = page.locator("#add-to-cart-sauce-labs-onesie");
  await buttonAddtochart4.click();  

  const buttonChart = page.locator("#shopping_cart_container > a");
  await buttonChart.click();

  const buttonRemove = page.locator("#remove-sauce-labs-backpack");
  await buttonRemove.click();

  const buttonRemove1 = page.locator("#remove-sauce-labs-bike-light");
  await buttonRemove1.click();

  const buttonCheckout = page.locator("#checkout");
  await buttonCheckout.click();

  const inputFirstname = page.locator("#first-name");
  await inputFirstname.fill("Rizki");
  await expect(inputFirstname).toHaveValue("Rizki");

  const inputLastname = page.locator("#last-name");
  await inputLastname.fill("Imaddudin");
  await expect(inputLastname).toHaveValue("Imaddudin");

  const inputPostcode = page.locator("#postal-code");
  await inputPostcode.fill("1234");
  await expect(inputPostcode).toHaveValue("1234");

  const buttonContinue = page.locator("#continue");
  await buttonContinue.click();

  const buttonFinish = page.locator("#finish");
  await buttonFinish.click();


});

