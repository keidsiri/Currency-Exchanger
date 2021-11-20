import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrentService, convert} from './currency.js';


$(document).ready(function() {
  $('#convert').click(function() {
    let code = $("#code").val();
    CurrentService.getCurrency(code)
      .then(function(response) {
        const body = response;
        let rate = body.conversion_rates.USD;
        let usd = $('#number').val();
        let exchange = convert(usd, rate);
        $('#showRate').html(exchange);
        $('.showInfo').html(body.time_last_update_utc);
      })
      .catch(function(error) {
        $('.showErrors').html(`There is an error please try your currency code again : ${error}`);
        $('ShowErrors').html();
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

