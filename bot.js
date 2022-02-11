const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

const bot = new TelegramApi(token, {polling:true})

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    
    if (text === "/start") {
       await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/1.webp');
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})


