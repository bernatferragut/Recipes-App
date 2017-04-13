import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipes: Recipe[]= [
    new Recipe
        ('Vegan1',
        'Description1: Vegan1 is ...',
        './assets/images/recipe.jpg',
         [ new Ingredient( 'love', 20), new Ingredient('mind', 30)]
         ),

    new Recipe
        ('Vegan2',
        'Description2: Vegan2 is ...',
        './assets/images/recipe.jpg',
         [ new Ingredient ('more love', 30), new Ingredient('memory', 40)]
         ),
     ];

    getRecipe() {
        return this.recipes.slice();
    }

}