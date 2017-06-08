var request = require('request');

var url = 'https://www.mercadobitcoin.net/api/ticker/'

var listValues = [];
var waitSeconds = 60;

setInterval(function() {
  request(url, function(error, response, json){

    if (!error) {
      var bitcoinValues = JSON.parse(json);
      addLastPrice(bitcoinValues.ticker)
    }
    else {
      console.log(error);
    }
  })
}, 1000 * waitSeconds);

function addLastPrice(ticker) {
  listValues.push(ticker.last);

  if (listValues.length > 10) {
    listValues.shift();
  }

  console.log(listValues);
}
