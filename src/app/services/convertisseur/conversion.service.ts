import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConversionService {
    rateUSDtoEUR =0 
    rateUSDtoYUAN = 0
    rateEURtoYuan = 0
  constructor() { }

  getRate(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Asp64FXVBupgD844xUPPz40n6U4hicdn");
    let requestInit = {
      method: 'GET',
      //redirect: 'follow',
      headers: myHeaders
    }


    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=USD&amount=1`, requestInit)
      .then(response => response.json())
      .then(result => {
        console.log(result.info.rate);
        this.rateUSDtoEUR = result.info.rate
      })
      .catch(error => console.log('error', error));

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=CNY&from=USD&amount=1`, requestInit)
    .then(response => response.json())
    .then(result => {
      console.log(result.info.rate);
      this.rateUSDtoYUAN = result.info.rate
    })
    .catch(error => console.log('error', error));

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=CNY&from=EUR&amount=1`, requestInit)
    .then(response => response.json())
    .then(result => {
      console.log(result.info.rate);
      this.rateEURtoYuan = result.info.rate
    })
    .catch(error => console.log('error', error));


  }
  
    getconvertDevise(amount: number, from: string, to: string){
      let resultat={
        'eur':0,
        'usd':0,
        'yuan':0
        }

      if (from == 'USD'){
          resultat['usd']=amount
          resultat['eur']=amount / this.rateUSDtoEUR
          resultat['yuan']=amount * this.rateUSDtoYUAN
      }else if(from == 'EUR'){
        resultat['usd']=amount*this.rateUSDtoEUR
        resultat['eur']=amount
        resultat['yuan']=amount*this.rateEURtoYuan
      }else if(from == 'YUAN'){
        resultat['usd']=amount/this.rateUSDtoYUAN
        resultat['eur']=amount/this.rateEURtoYuan
        resultat['yuan']=amount
      }else{
        console.log("Une erreur");
      }
      console.log(resultat);
      return resultat

    }
}