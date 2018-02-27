var TelegramBot = require('node-telegram-bot-api');

var request = require('request');

//var config = require('./config'); 

var moment = require('moment'); //For time

var parce; //Parced data

var price; //price

var change; //price change

var token = '527475365:AAHxVDBla2-Cojs_FZ78zDbCyL0AjgvfjqM'; // Bot token

var bot = new TelegramBot(token, {polling: true}); 


//START-----------------------------------------------------------------------------

var CryptoVaultBTNS = {
  reply_markup: JSON.stringify({
      "parse_mode": "Markdown",
    inline_keyboard: [
        [{ text: 'Press', callback_data: 'ETH' }]
    ]
  })
};

bot.onText(/\/start/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Press this button:', CryptoVaultBTNS);
});

//----------------------------------------------------------------------------------


//CAllBACK==================================================================\

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    
  var action = callbackQuery.data;
  var msg = callbackQuery.message;
  var opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
      
      "parse_mode": "html",
       reply_markup: JSON.stringify({
    inline_keyboard: [
        [{text: 'Bitcoin',   callback_data: 'BTC'  },
        { text: 'Bcash',     callback_data: 'BCH'  },
        { text: 'Blackcoin', callback_data: 'BLK'  }],
        [{text: 'Bytecoin',  callback_data: 'BCN'  },
        { text: 'Dash',      callback_data: 'DASH' },
        { text: 'Dogecoin',  callback_data: 'DOGE' }],
        [{text: 'Emercoin',  callback_data: 'EMC'  },
        { text: 'Ethereum',  callback_data: 'ETH'  },
        { text: 'Litecoin',  callback_data: 'LTC'  }],
        [{text: 'Monero',    callback_data: 'XMR'  },
        { text: 'Peercoin',  callback_data: 'PPC'  },
        { text: 'Primecoin', callback_data: 'XPM'  }],
        [{text: 'Reddcoin',  callback_data: 'RDD'  },
        { text: 'Ripple',    callback_data: 'XRP'  },
        { text: 'Zcash',     callback_data: 'ZEC'  }]
    ]
  })
  }; 
    
    
//START OF PARCING==============================================\

       var URL = "https://api.cryptonator.com/api/ticker/"+ action +"-usd";
  request(URL, function (err, res, body) {
    if (err) throw err;
    parce = JSON.parse(body);
    price = (parce.ticker.price);
    change = (parce.ticker.change);
    
    moment.locale("us");
    var now = moment().format('LLLL');
        
        var sendtouser = "Time: " + now + ". " + action + " rate: " + price + "$ " + "Change: " + change + "$";
    
         bot.editMessageText(sendtouser, opts);
    });
        
     
});

//CAllBACK_____________________________________________________________________________________________/