const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "109.94.209.66",
    port:3306,
    user: "admin6247k",
    password: "lao6247K",
    database:"trainlist"
});

const bot = new TelegramApi(token, {polling:true})
/*==================== Запити в базу даних ====================*/
const updateStat = (id, date) => { 
    pool.getConnection()
        .then(conn => {
          conn.query("SELECT 1 as value")
            .then(() => {
              console.log( "Successful Update!"); 
              return conn.query(`UPDATE sokaT SET value = value+1 WHERE id=${id}`),
              conn.query(`UPDATE sokaT SET value = ${date} WHERE id=6`);

            })   
        }).catch(err => {
          console.log(err);
        });
  }

  async function getStat(){
      
          let conn = await pool.getConnection();
          let all = await conn.query('SELECT * FROM sokaT')
          return all
       
  }



const start = () => {

  
    bot.setMyCommands([
        {command: "/soka", description: "Дізнатися СОКУ дня і який у неї лук"},
        {command: "/stat", description: "Статiстiка!"}
    ]);

    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        switch (text) {

            case "/stat" :
                return(
                    statData = await getStat(),
                    bot.sendMessage(chatId,`Список СОК дня за весь час:

                    ${statData[0].name}    *| ${statData[0].value} |
                    ${statData[1].name}         *| ${statData[1].value} |
                    ${statData[2].name}           *| ${statData[2].value} |
                    ${statData[3].name}      *| ${statData[3].value} |
                    ${statData[4].name}*| ${statData[4].value} |
                    `)
                    // FOREACH 
                    // bot.sendMessage(chatId,"Список СОК дня за весь час:"),
                    // statData = await getStat(),
                    // statData.forEach(element => {
                    // bot.sendMessage(chatId, ` 
                    //     ${element.name}, ${element.value}`);
                    // }) 
                )
                
            case "/soka":
                statData = await getStat()
                console.log()
                if (statData[5].value !== dateYear) {
                    const users = [
                        {name: "Марта Жолобак ", id: 1},
                        {name: "Марія Габчак", id: 2},
                        {name: "Олег Габчак", id: 3},
                        {name: "Віра Пшеничка", id: 4},
                        {name: "Сніжана Сахарчук", id: 5}
                    ]
                    let soka = users[randomNum(0, 5)]
                return (
                    
                    // if (statData[5].value === 49 ) {console.log(124235)},
                    setTimeout(() => { bot.sendMessage(chatId, `${text1[randomNum(0, 9)]}`)}, 1000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text2[randomNum(0, 9)]}`)}, 3000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text3[randomNum(0, 9)]}`)}, 5000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text4[randomNum(0, 9)]}${soka.name}`)}, 7000),
                    updateStat(soka.id, dateYear)
                    
                )
                }
            default:
                return bot.sendMessage(chatId, `СОКА дня відома! `);
        }
    })
}

start()






/*==================== рандомне число ===================*/
function randomNum(a, b) {
    return  Math.floor(Math.random() * b) + a;
    // Function returns the product of a and b
  }

console.log(randomNum(1,4));

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
let dateYear = date365 + currentDay; 

console.log(dateYear);

/*==================== Рандомні повідомлення ===================*/
let text1 = ['Навіщо ви мене розбудили...',
             'Ініціюю пошук *підора дня*...',
             'Отже... хто ж сьогодні *підор дня*?',
             'Хто сьогодні щасливчик?',
             'Знову в ці ваші іграшки граєте? Ну добре...',
             'Обережно! *Підор дня* активований!',
             'Зараз *зачаруємо*...',
             'Система зламана. Завдано шкоди. Запущено планування контрзаходів.',
             'Гей, навіщо розбудили...',
             '*### RUNNING TYPIDOR.SH',
             'Woop-woop! Thats the sound of da SOKA-police!']
let text2 = ['_Ведеться пошук у базі даних_',
             '_Військовий супутник запущений, коди доступу всередині..._',
             '_Виїжджаю на місце..._',
             '_Де ж він..._',
             '_Машини виїхали_',
             '_Ну давай, подивимося хто тут класний ..._',
             '_Цікаво..._',
             '_Сканую..._',
             '_Сонно дивиться на папери_',
             '_Хм..._',
             '_Шаманім-шаманім..._',
             '_(Ворчить) А могли б на роботі справою займатися_']
let text3 = ['Ведеться захоплення підозрюваного...',
             'Високий пріоритет мобільного юніту.',
             'У цьому немає сенсу...',
             'Доступ отримано. Анулювання протоколу.',
             'КЕК!',
             'Не може бути!',
             'Ого-го...',
             'Ох...',
             'Перевіряю дані...',
             'Так, що тут у нас?',
             'Так-так, що ж тут у нас...',
             'Тисяча чортів!',
             'Що ж з нами стало...',
             'Я в небезпеці, системи пошкоджені!']
let text4 = ['Ага! Вітаю! Сьогодні *ти підор* - ',
             'І прекрасна людина дня сьогодні... а ні, помилка, всього лише *підор дня*- ',
             'Здається, *пидор дня* - ',
             'Хто б міг подумати, але *підір дня* - ',
             'Хто тут у нас *підор дня*? Ти *підор дня* - ',
             'Ну ти і *підор*, ',
             'Няшний *підор дня* - ',
             'Ого, ви подивіться тільки! СОКА дня-то - ',
             'Стояти! Не рухатись! Ви оголошені *підором дня*, ',
             'Що? Де? Коли? А ти *підор дня* - ',
             '*Підор дня* звичайний, 1шт. - ']
let textWrong = [
    'Не вмієш ci бавити іди додому🤷‍♀️'
]















/*==================== масив з Луками дня ====================*/
const looks = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/1.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/2.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/3.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/4.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/5.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/6.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    
]