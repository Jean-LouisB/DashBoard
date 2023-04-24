import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  
  imc: number = 0
  userImc: string = ''
  userData = new FormGroup(
    {
      userName: new FormControl(''),
      userHeight: new FormControl(0),
      userWeight: new FormControl(0)
    }
  )

  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
    console.log('IMC lancé');
    this.createCookie()
  }
  createCookie(){
    var cookiesList= document.cookie.split('; ')
    var isPresent = false
    cookiesList.forEach(cookie => {
      if(cookie.split('=')[0]=='nomCookie'){
        isPresent = true
      }
    });
    if(!isPresent){
      this.cookieService.set('nomCookie','Arthur',1)
    }
    
  }

  submit() {

    let nom = this.userData.value.userName!
    let masse = this.userData.value.userWeight!
    let taille = this.userData.value.userHeight! / 100
    let imc = (masse / (taille * taille))
    this.imc = masse / (taille * taille)
    this.userImc = `${nom} votre IMC est de ${imc.toFixed(2)}`
    let popo = this.cookieService.get('nomCookie')
    console.log("popo= "+popo);
    
    this.verdict(imc)
  }


  verdict(imc: number) {
    let p = document.getElementById('noteVerdict')
    p!.textContent=''
    let image= <HTMLImageElement>document.querySelector('#imgVerdict')
    image.src = ''

    if (imc < 18.5) {
      p!.append("Vous avez une corpulence maigre")
      image.src = 'assets/maigre.jpg'

    } else if (imc >= 18.5 && imc < 25) {
      p!.append("Vous avez une corpulence normale")
      image.src = 'assets/normal.jpg'
      

    } else if (imc >= 25 && imc < 30) {
      p!.append("Vous avez une corpulence surpoids")
      image.src = 'assets/surpoids.jpg'
      

    } else {
      p!.append("Vous avez une corpulence obèse")
      image.src = 'assets/obese.jpg'
      
    }
    let verdict = document.getElementById("verdictContent")
    verdict!.classList.add('appear')
  }
}
