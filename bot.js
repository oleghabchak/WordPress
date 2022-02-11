const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

var http = require("http");
setInterval(function() {
    http.get("http://sokabot6247.herokuapp.com");
}, 300000); // every 5 minutes (300000)

const bot = new TelegramApi(token, {polling:true})

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
   let a = 5; 
    let stiker = `https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/${a}.webp`

    if (text === "/start") {
       await bot.sendSticker(chatId, stiker );
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})


