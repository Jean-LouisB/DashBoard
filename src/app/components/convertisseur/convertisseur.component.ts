import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../../services/convertisseur/conversion.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-devise',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class DeviseComponent implements OnInit{
   

    usd = new FormControl(0)
    eur = new FormControl(0)
    yuan = new FormControl(0)

    constructor(private service: ConversionService){}
  
  ngOnInit(): void {
    this.service.getRate()
  }

  getRateServ(){
    this.service.getRate()
  }

  convertFromUSD(){
    this.eur.setValue(Math.round(this.service.getconvertDevise(this.usd.value!,'USD','EUR')['eur']*100)/100)
    this.yuan.setValue(Math.round(this.service.getconvertDevise(this.usd.value!,'USD','YUAN')['yuan']*100)/100) 
  }
  convertFromEUR(){
    this.usd.setValue(Math.round(this.service.getconvertDevise(this.eur.value!,'EUR','USD')['usd']*100)/100)
    this.yuan.setValue(Math.round(this.service.getconvertDevise(this.eur.value!,'EUR','YUAN')['yuan']*100)/100) 
  }
  convertFromYuan(){
    this.usd.setValue(Math.round(this.service.getconvertDevise(this.yuan.value!,'YUAN','USD')['usd']*100)/100)
    this.eur.setValue(Math.round(this.service.getconvertDevise(this.yuan.value!,'YUAN','EUR')['eur']*100)/100) 
  }

}
