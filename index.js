var request = require('request');

var url = 'https://www.mercadobitcoin.net/api/ticker/'

request(url, function(error, response, json){

  if (!error) {
    console.log(json);
  }
  else {
    console.log(error);
  }
})
