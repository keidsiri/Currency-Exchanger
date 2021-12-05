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
        let currency = convert(1, rate);
        $('#showRate').html(exchange);
        $('.showInfo').html(body.time_last_update_utc);
        $('.ratePerUsd').html(currency);
        $('.showErrors').html('');
      })
      .catch(function(error) {
        $('.showErrors').html(`The currency code doesn't exist. Please try again! <br> ${error}`);
      });
  });
  // $('#showRates').click(function() {
  //   CurrentService.getRates()
  //     .then(function(response) {
  //       const body = response;
  //       const allRates = body.conversion_rates;
  //       console.log(allRates);
  //       $('.allRates').html(allRates);
  //     })
  //     .catch(function(error) {
  //       $('.showErrors').html(`There is some error for currency API : ${error}`);
  //     });
  // });

});


