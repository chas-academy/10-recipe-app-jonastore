import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  savedlist: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveRecipe() {
  	const strMeal = this.route.snapshot.params["strMeal"];

  	this.savedlist.push(strMeal);

  }

}
