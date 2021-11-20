import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import CurrentService from './currency.js';
import {CurrentService, convert} from './currency.js';


// function displayErrors(error) {
//   $('.showErrors').text(`There is${error}`);
// }

$(document).ready(function() {
  // $('#currencyConvert').val("");

  // let promise = CurrentService.getCurrency();
  // promise.then(function(response) {
  //   const body = JSON.parse(response);
  //   Object.keys(body.conversion_rates).forEach(key => {
  //     let value = body.conversion_rates[key];
  //     $('.showAllRates').append(`${key}: ${value} <br>`);
  //     console.log(`key ${key}: value ${value}`);
  //   });
  // }, function(error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error}`);
  // });

  $('#convert').click(function() {
    let code = $("#code").val();
    // $('#convert').val("");
    CurrentService.getCurrency(code)
      .then(function(response) {
        const body = response;
        let rate = body.conversion_rates.USD;
        let usd = $('#number').val();
        let exchange = convert(usd, rate);
        $('#showRate').html(exchange);
      })
      .catch(function(error) {
        $('.showErrors').html(`There is an error please try your currency code again : ${error}`);
        $('ShowErrors').val("")
      });

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

