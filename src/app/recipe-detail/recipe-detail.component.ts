import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';

import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Recipe } from "../Recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipes: string[];

  constructor(private _recipeService : RecipeService, private route: ActivatedRoute, private _location : Location ) { }

  ngOnInit() {
  	const idMeal = this.route.snapshot.params["idMeal"]; //+ delete

    this._recipeService.getDetail(idMeal).subscribe(
    	 data => this.searchComplete(data))
  	};

  searchComplete(data) { 
  	 this.recipes = data.meals;
  	 console.log(data.meals);
  }

  goBack(): void {
    this._location.back();
  }

}
