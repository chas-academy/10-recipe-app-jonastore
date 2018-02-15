import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http'; //remove headers=
import { Recipe } from './recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private query: string;
  private API_URL: string = environment.RECIPE_API_URL; //just put url here?
  private DETAIL_URL: string = environment.RECIPE_DETAIL_URL;
  private SEARCH_URL: string = this.API_URL + '?c=';

  constructor(private _http : Http) { }

  getRecipe(query) {
  	return this._http.get(this.SEARCH_URL + query).map(res => res.json());  //change URL to SEARCH_URL or something
  }
  //starts here

  getDetail(idMeal) {
  	return this._http.get(this.DETAIL_URL + idMeal ).map(res => res.json());
  }

  //ends here

}
