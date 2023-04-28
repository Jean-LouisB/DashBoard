import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AccueilComponent {
              infoCegefos={
              organisation:  "CEGEFOS",
              structure : "SARL",
              adresse : "28 Rue Xavier Bichat, 72000 Le Mans, France",
              telephone : "+33 2 43 52 36 45",
            }
            private mission = "La société est spécialisée dans les formations numériques en ligne. Elle assure un contenu pédagogique et varié ainsi qu’une assistance aux apprenants."
constructor(){
}

getMission(){
  return this.mission
}

}
