
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
  let x = (usd/rate).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add comma as thousands and only show 2 decimals
  return x;
}
