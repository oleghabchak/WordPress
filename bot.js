const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

const bot = new TelegramApi(token, {polling:true})

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    
    if (text === "/start") {
       await bot.sendSticker(chatId, '');
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})


