const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 

const bot = new TelegramApi(token, {polling:true})

bot.on("message", async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    
    if (text === "/start") {
       await bot.sendSticker(chatId, 'https://lh3.googleusercontent.com/gRphnxwP9kimjAfMNZ58S85qeUi_0VKFEsBXD9fbXcKcz1DMzmSMfOV5cFjq84frn5g3hKfVCk9Ag8Mu3zaQZGrTnM1NXvgEt66TQ63RaqB3XDnQoiVobCRapTUHw9BeMbqI8he2QTthqQsdbJEFNlZ23tJ1AexNaFHm3uNZk2_A6xiRpF_5D02ST3g56tNIsR7qpNrrQf47NRtf1NItvlaBvbTRywUuVgNleMrFruj5vF-ErM7zrNceCMLPkxDO90mbwdbqkmKdnbu0n_hOvK6i8Rh_rNbryA8MucBPZxg3D9ggh5X7eLD9MeSRCO1lYhU2Rql0izgJ45o8XnHTBhUkw0NvJOkvyURzFdk_O2oN0Whk6tcfSryv-Wvb7gH0i-PswqLv_OHzMc9iCgLaWkdofE_Fe5-MZrnJRDnDIlvVq7BK7GnlZEYoa2fw4awXbDMRQs4C7z5rYDqEIMKk8shi17-Q23YWjvbMFdvni7ujTeLHQGISrKPkfmn1g6XqB9YSrCh4BMAInsnvOszcbUaEXftqPtubzsC9JqlAYXbqBZRY0ks0LJeJcPCQ_qPx1Sd1BC5LBLBe2IbyrPwsSaPeX248ss7AAAQH-lRKNHKLiCFzVrfq3pgCh8qa6khBwgEvOWbLRVKUhKoW_f5caJYlm3J_MK2Za6lPPs-50Nc-hmJPkQCS-TJZtuLA7ra05JWadkll6uEgRutcGVgRPqmOXg=w681-h907-no?authuser=0');
       await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`)
    }
})


