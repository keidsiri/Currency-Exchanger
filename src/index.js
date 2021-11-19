import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrentService from './currency.js';

$(document).ready(function() {
  $('#currencyConvert').val("");

  let promise = CurrentService.getCurrency();
  promise.then(function(response) {
    const body = JSON.parse(response);
    Object.keys(body.conversion_rates).forEach(key => {
      let value = body.conversion_rates[key];
      $('.showAllRates').append(`${key}: ${value} <br>`);
      console.log(`key ${key}: value ${value}`);
    });
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });

  
});


// for ( let i = 0; i < body.length; i++) {
//   currencyRate.push(`${body[i].conversion_rates}`);
//   $('.showAllRates').html(currencyRate);

// $(document).ready(function() {
//   $('#cryptoConvert').click(function() {
//   const number = $("#number").val();
//   $('#cryptoConvert').val("");

//   let promise = CryptoService.getCrypto();
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     const cryptoConverter = new CryptoService.converter(body, number);

//     let cryptoCurrency = [];
//     for (let i = 0; i < body.length; i++) {
//       cryptoCurrency.push(`<img src= ${body[i].logo_url} class='crypto-img'> <br>`);
//       cryptoCurrency.push(`${body[i].symbol} - Rank :${body[i].rank} <br> Price: $${parseInt(body[i].price)} <hr class="new1"> <br>`);
//       $('.showCrypto').html(cryptoCurrency);
//       $('.showConverter').html(cryptoConverter);
//     }  
//   }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });

