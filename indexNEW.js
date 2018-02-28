var TelegramBot = require('node-telegram-bot-api');

var request = require('request');

var config = require('./config'); 

var moment = require('moment'); //For time

var parce; //Parced data

//var base; //crypt name
var Bitcoinprice;
var Bcashprice;
var Blackcoinprice;
var Bytecoinprice;
var Dashprice;
var Dogecoinprice;
var Emercoinprice;
var Ethereumprice;
var Litecoinprice;
var Moneroprice;
var Peercoinprice;
var Primecoinprice;
var Reddcoinprice;
var Rippleprice;
var Zcashprice;

var Bitcoinchange;
var Bcashchange;
var Blackcoinchange;
var Bytecoinchange;
var Dashchange;
var Dogecoinchange;
var Emercoinchange;
var Ethereumchange;
var Litecoinchange;
var Monerochange;
var Peercoinchange;
var Primecoinchange;
var Reddcoinchange;
var Ripplechange;
var Zcashchange;


var price; //price

var change; //price change

var token = config.token; // Bot token

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

    function parsing (request, res) { 
    var BitcoinURL = "https://api.cryptonator.com/api/ticker/btc-usd";

  request(BitcoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Bitcoinprice = (parce.ticker.price);
    Bitcoinchange = (parce.ticker.change);
}
}      
    var BcashURL = "https://api.cryptonator.com/api/ticker/bch-usd";
        
          request(BcashURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Bcashprice = (parce.ticker.price);
    Bcashchange = (parce.ticker.change);
}        
    var BlackcoinURL = "https://api.cryptonator.com/api/ticker/blk-usd";
        
          request(BlackcoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Blackcoinprice = (parce.ticker.price);
    Blackcoinchange = (parce.ticker.change);
}        
    var BytecoinURL = "https://api.cryptonator.com/api/ticker/bcn-usd";
        
          request(BytecoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Bytecoinprice = (parce.ticker.price);
    Bytecoinchange = (parce.ticker.change);
}        
    var DashURL = "https://api.cryptonator.com/api/ticker/dash-usd";
        
          request(DashURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Dashprice = (parce.ticker.price);
    Dashchange = (parce.ticker.change);
}        
    var DogecoinURL = "https://api.cryptonator.com/api/ticker/doge-usd";
        
          request(DogecoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    price = (parce.ticker.price);
    change = (parce.ticker.change);
}        
    var EmercoinURL = "https://api.cryptonator.com/api/ticker/emc-usd";
        
          request(EmercoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Emercoinprice = (parce.ticker.price);
    Emercoinchange = (parce.ticker.change);
}        
    var EthereumURL = "https://api.cryptonator.com/api/ticker/eth-usd";
        
          request(EthereumURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Ethereumprice = (parce.ticker.price);
    Ethereumchange = (parce.ticker.change);
}        
    var LitecoinURL = "https://api.cryptonator.com/api/ticker/ltc-usd";
        
          request(LitecoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Litecoinprice = (parce.ticker.price);
    Litecoinchange = (parce.ticker.change);
}        
    var MoneroURL = "https://api.cryptonator.com/api/ticker/xmr-usd";
        
          request(MoneroURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Litecoinprice = (parce.ticker.price);
    Litecoinchange = (parce.ticker.change);
}        
    var PeercoinURL = "https://api.cryptonator.com/api/ticker/ppc-usd";
        
          request(PeercoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Peercoinprice = (parce.ticker.price);
    Peercoinchange = (parce.ticker.change);
}        
    var PrimecoinURL = "https://api.cryptonator.com/api/ticker/xpm-usd";
        
          request(PrimecoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Primecoinprice = (parce.ticker.price);
    Primecoinchange = (parce.ticker.change);
}        
    var ReddcoinURL = "https://api.cryptonator.com/api/ticker/rdd-usd";
        
          request(ReddcoinURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Reddcoinprice = (parce.ticker.price);
    Reddcoinchange = (parce.ticker.change);
}        
    var RippleURL = "https://api.cryptonator.com/api/ticker/xrp-usd";
        
          request(RippleURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Rippleprice = (parce.ticker.price);
    Ripplechange = (parce.ticker.change);
}        
    var ZcashURL = "https://api.cryptonator.com/api/ticker/zec-usd";
        
          request(ZcashURL, function (err, res, body) {
    function() {
    if (err) throw err;
    parce = JSON.parse(body);
    Zcashprice = (parce.ticker.price);
    Zcashchange = (parce.ticker.change);
}        
}    


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

    moment.locale("us");
    var now = moment().format('LLLL');
    
    if (action == 'BTC'){
        var sendtouser = "Time: " + now + ". " + action + " rate: " + Bitcoinprice + "$ " + "Change: " + Bitcoinchange + "$";
         bot.editMessageText(sendtouser, opts);
    }
        
    
//END OF PARCING_______________________________________________/
    //var Timeout210 = setTimeout(function() {}, 200);
         
    
     
    });
     
});

//CAllBACK_____________________________________________________________________________________________/