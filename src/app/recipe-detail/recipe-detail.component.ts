import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';

import { ActivatedRoute } from "@angular/router";

import { Recipe } from "../Recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipes: any[];

  constructor(private _recipeService : RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
  	const idMeal = +this.route.snapshot.params["idMeal"];

    this._recipeService.get(idMeal).subscribe(
    	 data => this.searchComplete(data))
  	};

  searchComplete(data) { 
  	this.recipes = data.meals;
  	console.log(data.meals);
  }

}
