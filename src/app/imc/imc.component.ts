import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }
  ngOnInit(): void {
    console.log('IMC lancé');

  }

  submit() {

    let nom = this.userData.value.userName!
    let masse = this.userData.value.userWeight!
    let taille = this.userData.value.userHeight! / 100
    let imc = (masse / (taille * taille))
    this.imc = masse / (taille * taille)
    this.userImc = `${nom} votre IMC est de ${imc.toFixed(2)}`

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
