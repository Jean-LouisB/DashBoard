import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Routes , RouterModule} from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { DeviseComponent } from './devise/devise.component';

const routes: Routes = [
  {path: 'home' , component: AccueilComponent},
  {path: 'imc' , component: ImcComponent},
  {path: 'devises' , component: DeviseComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImcComponent,
    DeviseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
