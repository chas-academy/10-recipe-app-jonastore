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

  filters = [
    'breakfast',
    'vegan',
    'vegetarian',
    'starter',
    'desert',
    'miscellaneous'
  ];

  constructor(private _recipeService : RecipeService) { }

  searchRecipes(query){
  	return this._recipeService.getRecipe(query).subscribe(
  		data => this.searchComplete(data),
      error => this.searchFailed(error)
      )
  }

  searchComplete(data) { 
  	 this.recipes = data.meals;
  	 console.log(data.meals);
  }

  searchFailed(error) {
    console.log(error);
  }

  ngOnInit() {
  }

}