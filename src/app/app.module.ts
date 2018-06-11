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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [RecipeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
