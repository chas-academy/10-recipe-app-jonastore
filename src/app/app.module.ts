import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: "details/:idMeal", component: RecipeDetailComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot() //delete this
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
