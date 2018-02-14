import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  moduleId: module.id //delete this
})
export class RecipeListComponent implements OnInit {

  recipes: any[];

  constructor(private _recipeService : RecipeService) { }

  searchRecipes(query){
  	return this._recipeService.getRecipe(query).subscribe(
  		data => this.searchComplete(data))
  }

  searchComplete(data) { 
  	this.recipes = data.meals;
  	console.log(data.meals);
  }

  ngOnInit() {
  }

}
