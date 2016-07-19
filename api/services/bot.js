var telegramBot = require('node-telegram-bot-api');
var token = '224382585:AAFxjWlMS9wAvJ93osR0cHTIEvkLonE9qhg';

    var bot = new telegramBot(
        token, {
            polling:true
        }
    );
    var ar_nombres=[];
    var ar_id = [];
bot.getMe().then(function (me){
    console.log('Hi my name is %s!', me.username);
});

bot.onText(/^\/soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `¡Hola ${name}!`).then(function () {
        console.log(`Saludando a ${name}`);
    });
});

bot.onText(/^\/foto mono/, function (msg, match) {
    var photo_id = './assets/images/mono.jpg';
    console.log(msg);
    bot.sendPhoto(msg.chat.id, photo_id,{
        caption:'Foto Not again'
    });
    console.log("Enviando foto");
});

bot.onText(/^\/video puppet/, function (msg, match) {
    var video = './assets/videos/puppet.mp4';
    console.log(msg);
    bot.sendVideo(msg.chat.id, video,{
        caption:'Funny'
    });
    console.log("Enviando video");
});

bot.onText(/^\/ubicacion utec/, function (msg, match) {
    var longitud = -98.4049;
    var latitud = 20.0750;
    console.log(msg);
    bot.sendLocation(msg.chat.id, latitud, longitud, {
        caption:'Aqui esta lo que buscas'
    });
    console.log("Ubicacion enviada");
});

bot.onText(/^\/id name/, function (msg, match) {
    var id = msg.chat.id;
    var name = msg.chat.first_name;
      /*  for(var i=0; i<ar_nombres.length&&i<ar_id.length;i++){
            ar_nombres[i]= msg.chat.first_name;
            ar_id[i]= msg.chat.id;
        }
    console.log(ar_nombres[0]);*/
    bot.sendMessage(msg.chat.id, `¡Hola ${name}, ${id}!`).then(function () {
        console.log(`Saludando a ${name}`);
    });
});


