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
        {command: "/soka", description: "Дізнатися СОКУ дня !)"},
        {command: "/look", description: "Дізнатися який у СОКИ лук"},
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
                    setTimeout(() => { bot.sendMessage(chatId, `${text1[randomNum(0, 10)]}`)}, 1000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text2[randomNum(0, 12)]}`)}, 3000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text3[randomNum(0, 11)]}`)}, 5000),
                    setTimeout(() => { bot.sendMessage(chatId, `${text4[randomNum(0, 12)]}${soka.name}`)}, 7000),
                    updateStat(soka.id, dateYear)
                    
                )
                }  else {
                    return bot.sendMessage(chatId, `СОКА дня відома! `);
                 }

                case '/look' : 
                console.log('look');
                photo = looks[dateYear]
                  bot.sendPhoto(chatId, await photo),
                  bot.sendMessage(chatId, `${lookText[randomNum(0, 9)]}`)
                 break

            default:
                return bot.sendMessage(chatId,  `${textWrong}`)
        }
    })
}

start()






/*==================== рандомне число ===================*/
function randomNum(a, b) {
    return  Math.floor(Math.random() * b) + a;
    // Function returns the product of a and b
  }



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

console.log("День року:",dateYear);


/*==================== Рандомні повідомлення ===================*/
let text1 = ['Навіщо ви мене розбудили...',
             'Ініціюю пошук СОКИ...',
             'Отже... хто ж сьогодні СОКА?',
             'Хто сьогодні щасливчик?',
             'Знову забавунькаєтеся ? Ану шуруйте до роботи...',
             'Обережно! СОКА активована!',
            'Вам ще не надоїло!?',
            'Святий Боже, святий кріпкий, я з Уличного, а ти звідки?',
             'Гей, навіщо ви мене розбудили...',
             'Woop-woop! Thats the sound of da SOKA-police!']
             
let text2 = ['Ведеться пошук у базі даних',
             'Військовий супутник запущений, коди доступу всередині...',
             'Виїжджаю на місце..._',
             'Перевірка всіх хто не помив голову... ',
             'Машини виїхали',
             'Ну давай, подивимося хто тут СОКА ...',
             'Дзвоню спитатисі в Олеськи...',
             'Дзвоню в Уличненську сільську раду...',
             'Сонно дивиться на папери',
             'Чай? Кофе? Капучіно?, чи гарячого мужчину???',
             'Відчуваю запах СОКИ...',
             'А могли б на роботі справою займатися']
let text3 = ['Ведеться захоплення підозрюваного...',
             'У цьому немає сенсу...',
             'Доступ отримано. Відкриваємо архіви.',
             'Будинкові книги села Воютичі переглянуті',
             'Не може бути!',
             'Ого-го...',
             'Перевіряю дані...',
             'Так, що тут у нас?',
             'Так-так, що ж тут у нас...',
             'Перевірка поліцейської бази, збитих машиною... ',
             '']
let text4 = ['Ага! Вітаю! Сьогодні ти СОКА - ',
             'І прекрасна людина сьогоднішнього дня... а ні, помилка, всього лише СОКА ',
             'НЕ потрібно бути Екстрасексом, щоб дізнатися, що СОКА сьогодні -  ',
             'Хто б міг подумати, але ти СОКА - ',
             'Хто тут у нас СОКА? Ти СОКА!😛 - ',
             'Ну ти і СОКА, ',
             'У СОКИ сьогодні немита песька - ',
             'Ого, ви подивіться тільки! СОКА дня-це - ',
             'Стояти! Не рухатись! Ви оголошені СОКОЮ ',
             'Що? Де? Коли? А ти СОКА - ',
             '*СОКА звичайна, 1шт. - ']

let textWrong = [
    'Не вмієш ci бавити - іди додому🤷‍♀️']

let lookText = [
'Лук для сьогоднішньої СОКИ...',
'Наряд, в якому СОКА піде на паску',
'Наряд, який СОКА одягне до Лаппі на день народження...',
'Наряд, який СОКА одягне до Віри на Весілля...',
'Наряд, який СОКА одягне до Марії на заручини...',
'Наряд, який СОКА одягне до Сніжани на розписку...',
'Наряд, який СОКА одягне до Марти на стрижини її 3 дитини...',
'Лук, в якому СОКА піде сьогодні на роботу',
'Лук, в якому СОКА буде плести вінці ',
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
    "http://img.funtema.ru/2011/01/03012011/7/1.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/2.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/3.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/4.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/5.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/6.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/7.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/8.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/9.jpg",
    "http://img.funtema.ru/2011/01/03012011/7/10.jpg",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/1.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/2.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/3.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/4.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/5.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/6.webp",
    
]
