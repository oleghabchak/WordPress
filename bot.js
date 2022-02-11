const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

const bot = new TelegramApi(token, {polling:true})


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text == 'dog','cat') {
      bot.sendMessage(chatId, "You sent 'dog'")
    }
  })

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
   
    let stiker = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nitra_-_Panorama_01.JPG/800px-Nitra_-_Panorama_01.JPG`

    if (text === "/start") {
       await bot.sendSticker(chatId, looks[5]);
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})






/*==================== отримуємо день року ====================*/

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


/*==================== масив з Луками дня ====================*/
const looks = [
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/1.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/2.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/3.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/4.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/5.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/6.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    
]