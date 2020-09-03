const puppeteer = require('puppeteer');
const {data}=require("./user_name.json");
let noOfPosts=process.argv[2];
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  console.log("after page ... ")
  await page.goto("https://www.instagram.com",{waitUntil:"networkidle0"});
  console.log("Khul gaya ");
  //await page.screenshot({path: 'example.png'});
await page.type("input[name='username']",data.user,{delay:100});
console.log("In browser tab ")
await page.type("input[name='password']",data.password,{delay:100});
await page.click("button[type='submit']",{delay:100});
await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click("button[type='submit']"),
]);
await page.type("input[placeholder='Search']","coding_unicorn");
await page.waitForSelector(".drKGC .fuqBx a",{visible:true});
await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click(".drKGC .fuqBx a"),
]);
  //await browser.close();
  await page.waitForSelector("._9AhH0",{visible:true});
  await Promise.all([
      page.waitForNavigation({waitUntil:"networkidle2"}),
      page.click("._9AhH0"),
  ]);
  let i=0;
  do{
  await page.waitForSelector(".fr66n .wpO6b",{visible:true});
  await page.click(".fr66n .wpO6b"),
  await Promise.all([
  page.waitForNavigation({waitUntil:"networkidle2"}),
  page.click("._65Bje.coreSpriteRightPaginationArrow"),
  ]);
  i++;
}while(i<noOfPosts){
}
})();