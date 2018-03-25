// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  RECIPE_API_URL: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  RECIPE_DETAIL_URL: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
  firebase: {
    apiKey: "AIzaSyDED2o6kYlt7me-8XY8mK6ytNpwhX21-l8",
    authDomain: "recipeapp-d8f54.firebaseapp.com",
    databaseURL: "https://recipeapp-d8f54.firebaseio.com",
    projectId: "recipeapp-d8f54",
    storageBucket: "",
    messagingSenderId: "847694167198"
  }
};
