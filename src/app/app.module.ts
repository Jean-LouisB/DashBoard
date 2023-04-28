import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/home/home.component';
import { ImcComponent } from './components/imc/imc.component';
import { DeviseComponent } from './components/convertisseur/convertisseur.component';
import { CookieService } from 'ngx-cookie-service';
import { InscriptionComponent } from './components/user/inscription/inscription.component';
import { ListPostComponent } from './components/blog/listposts/list-post.component';
import { NewPostComponent } from './components/blog/newPost/newPost.component';
import { ModuleBlogModule } from './store/blog-store/module-blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './components/blog/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImcComponent,
    DeviseComponent,
    InscriptionComponent,
    ListPostComponent,
    NewPostComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModuleBlogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
