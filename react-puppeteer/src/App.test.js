const faker = require('faker');
const puppeteer = require('puppeteer');


const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
	let browser = await puppeteer.launch();
	let page = await browser.newPage();

	page.emulate({
	  viewport: {
      width: 500,
      height: 2400
	  },
	  userAgent: ''
	});

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.App-title');

	const html = await page.$eval('.App-title', e => e.innerHTML);
	expect(html).toBe('Welcome to a React app');

	await browser.close();
  }, 16000);
});


describe('Contact Form', () => {
  test('Can submit contact form', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    page.emulate({
      viewport: {
      width: 500,
      height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.contact-form');
    await page.click("input[name=fullname]");
    await page.type("input[name=fullname]", person.name);
    await page.click("input[name=email]");
    await page.type("input[name=email]", person.email);
    await page.click("textarea[name=message]");
    await page.type("textarea[name=message]", person.message);
    await page.click("input[type=checkbox]");

    await page.click("input[name=question]");

    await page.click("button[type=submit]");

    await browser.close();
  });
});