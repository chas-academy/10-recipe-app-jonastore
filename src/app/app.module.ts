import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './auth.service';
import { SavedComponent } from './saved/saved.component';
import { FilterPipe} from './recipe-list/filter.pipe';


const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: "details/:idMeal", component: RecipeDetailComponent },

];

/*export const firebaseConfig = {
    apiKey: "AIzaSyDED2o6kYlt7me-8XY8mK6ytNpwhX21-l8",
    authDomain: "recipeapp-d8f54.firebaseapp.com",
    databaseURL: "https://recipeapp-d8f54.firebaseio.com",
    projectId: "recipeapp-d8f54",
    storageBucket: "",
    messagingSenderId: "847694167198"
}*/


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    AuthComponent,
    SavedComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(), //delete this because you're not really using alert like this anyway? or are you? find out!
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [RecipeService, AuthService], //providers: [RecipeService]
  bootstrap: [AppComponent]
})
export class AppModule { }
