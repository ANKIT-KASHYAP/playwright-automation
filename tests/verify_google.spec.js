// @ts-check
import { test, expect } from '@playwright/test';

test('Test case name :TC_01', async ({ page }) => {

await page.goto("https://google.com");
const url = await page.url();

//console.log m likha or log krana to hmm apne understanding ke liy krte h but hmm "expect" ka use krte h 
//to verify ki actual m ye cheez dikh ri h is point p ki nahi 
//if yes ==>test tc will pass otherwise it will fail
console.log("url is ==>"+url);

await expect(page).toHaveURL("https://google.com");

//to verify the tile of the page url 
const tile= await page.title();
console.log("title of the url is=>"+tile);
//check or verify ki page ke pass ye tile h ki ni
await expect(page).toHaveTitle("google")


});