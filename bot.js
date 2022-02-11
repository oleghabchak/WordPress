const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

const bot = new TelegramApi(token, {polling:true})

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
   let a = 5; 
    let stiker = `https://tolknews.ru/picture/19141/1920x.jpg`

    if (text === "/start") {
       await bot.sendSticker(chatId, stiker );
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})

// отримуємо день року
let date365 = 0;

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth(); 
let currentDay = currentDate.getDate(); 

let monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

let leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay; 
console.log(date365);