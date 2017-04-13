import { Recipe } from './recipe.model';

export class RecipeService {

    recipes: Recipe[]= [
    new Recipe
        ('Vegan1',
        'Description1: Vegan1 is ...',
        './assets/images/recipe.jpg',
         []
         ),

    new Recipe
        ('Vegan2',
        'Description2: Vegan2 is ...', 
        './assets/images/recipe.jpg',
         []
         ),
     ];

    getRecipe() {
        return this.recipes.slice();
    }

}