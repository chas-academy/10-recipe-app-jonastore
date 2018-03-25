import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: "details/:idMeal", component: RecipeDetailComponent }

];

export const firebaseConfig = {
    apiKey: "AIzaSyDED2o6kYlt7me-8XY8mK6ytNpwhX21-l8",
    authDomain: "recipeapp-d8f54.firebaseapp.com",
    databaseURL: "https://recipeapp-d8f54.firebaseio.com",
    projectId: "recipeapp-d8f54",
    storageBucket: "",
    messagingSenderId: "847694167198"
}


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    SavedRecipesComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(), //delete this because you're not really using alert like this anyway? or are you? find out!
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
