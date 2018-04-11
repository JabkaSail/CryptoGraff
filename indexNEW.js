var TelegramBot = require('node-telegram-bot-api');

var request = require('request');

var token = '599609297:AAFCmoxOOAT1KqprwktNTDgQO9jU-krpq2Y'; // Bot token

var bot = new TelegramBot(token, {polling: true}); 


//START-----------------------------------------------------------------------------

bot.onText(/\/start/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Press this button:', CryptoVaultBTNS);
});

//----------------------------------------------------------------------------------
bot.onText(/\/(.+)/, function (msg, match) {
 // bot.sendMessage(msg.chat.id, 'Press this button:', CryptoVaultBTNS);
  var fromId = msg.from.id;
  var resp = match[1];
  console.log(resp);
  var parce; //Parced data
  var price; //price
  var change; //price change
//START OF PARCING==============================================\
    if (resp == 'usd' || resp == 'USD' || resp == 'eur' || resp == 'EUR')
    {
        var URL = "https://api.cryptonator.com/api/ticker/"+ resp +"-rur";
         request(URL, function (err, res, body) {
     if (err) parce = 0;
         //bot.sendMessage(468758493, err);
     parce = JSON.parse(body);
     price = (parce.ticker.price);
     price = (price - 0).toFixed(2);   
     change = (parce.ticker.change);
    change = (price * change/100).toFixed(2);
     var sendtouser = resp + " rate: " + price + "₽\n" + "Change: " + change + "%";
 //END OF PARCING_______________________________________________/
     
      bot.sendMessage(msg.from.id, sendtouser);
     });
    }
    else {
   var URL = "https://api.cryptonator.com/api/ticker/"+ resp +"-usd";
   request(URL, function (err, res, body) {
     if (err) parce = 0;
     parce = JSON.parse(body);
     price = (parce.ticker.price);
     price = (price - 0).toFixed(2);   
     change = (parce.ticker.change);
    change = (price * change/100).toFixed(2);
     var sendtouser = resp + " rate: " + price + "$\n" + "Change: " + change + "%";
 //END OF PARCING_______________________________________________/
     
      bot.sendMessage(msg.from.id, sendtouser);
     });
   } 
});
