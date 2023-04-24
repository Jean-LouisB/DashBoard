import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ConversionService {
    rateUSDtoEUR =1 
    rateUSDtoYUAN = 2
    rateEURtoYuan = 3
  constructor(private servCookies: CookieService) { }
  

  cookiesArePresent():  boolean{
    var cookiesList= document.cookie.split('; ')
    var isPresent = false
    cookiesList.forEach(cookie => {
      if(cookie.split('=')[0]=='rateUSDtoEUR'){
        isPresent = true
      }
    });
    return isPresent
  }



  createCookie(id: number){
      switch (id) {
        case 1:
          this.servCookies.set('rateUSDtoEUR',this.rateUSDtoEUR.toString(),1)
          break;
        case 2:
          this.servCookies.set('rateUSDtoYUAN',this.rateUSDtoYUAN.toString(),1)
        break;
        case 3:
          this.servCookies.set('rateEURtoYuan',this.rateEURtoYuan.toString(),1)
        break;
        default:
          break;
      }
      
  }

  getRate(){

    if(this.cookiesArePresent()){
      console.log('Cookies presents, connexion inutile');
    
      this.rateUSDtoEUR = parseFloat(this.servCookies.get('rateUSDtoEUR'))
      this.rateUSDtoYUAN = parseFloat(this.servCookies.get('rateUSDtoYUAN'))
      this.rateEURtoYuan = parseFloat(this.servCookies.get('rateEURtoYuan'))
      
    }else{
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
      .then(()=>this.createCookie(1))
      .catch(error => console.log('error', error));

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=CNY&from=USD&amount=1`, requestInit)
    .then(response => response.json())
    .then(result => {
      console.log(result.info.rate);
      this.rateUSDtoYUAN = result.info.rate
    })
    .then(()=>this.createCookie(2))
    .catch(error => console.log('error', error));

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=CNY&from=EUR&amount=1`, requestInit)
    .then(response => response.json())
    .then(result => {
      console.log(result.info.rate);
      this.rateEURtoYuan = result.info.rate
    })
    .then(()=>this.createCookie(3))
    .catch(error => console.log('error', error));

    }

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
        console.log("Une erreur dans getconvertDevise() est survenue - conversion.service.ts Ligne 116");
      }
      return resultat

    }
}