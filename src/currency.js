// export default class CurrentService {
//   static getCurrency(code) {
//     return new Promise (function (resolve, reject){
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${code}`;
//       request.onload = function () {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject (request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }

//   convert (usd,rate) {
//     return usd/rate;
//   }
// }


// Refactor from Promise to Fetch:
export class CurrentService {  
  static getCurrency(code) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${code}`)
      .then(function(response) {
        if(response.status === 404) {
          throw Error(response.statusText);
        } else if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}


export function convert(usd, rate){
  return usd/rate;
}