import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/home/home.component';
import { DeviseComponent } from './components/convertisseur/convertisseur.component';
import { ImcComponent } from './components/imc/imc.component';
import { InscriptionComponent } from './components/user/inscription/inscription.component';
import { ListPostComponent } from './components/blog/listposts/list-post.component';
import { NewPostComponent } from './components/blog/newPost/newPost.component';

const routes: Routes = [
  {path: 'home' , component: AccueilComponent},
  {path: 'imc' , component: ImcComponent},
  {path: 'devises' , component: DeviseComponent},
  {path: 'signin' , component: InscriptionComponent},
  {path: 'blog' , component: ListPostComponent},
  {path: 'newPost' , component: NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
