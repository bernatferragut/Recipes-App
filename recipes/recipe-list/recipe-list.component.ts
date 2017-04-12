import { Component, ViewChild, ViewContainerRef, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { MdSidenav, MdDialog, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

recipes: Recipe[]= [
  new Recipe('Vegan1', 'Description1: Vegan1 is ...', './assets/images/recipe.jpg'),
  new Recipe('Vegan2', 'Description2: Vegan2 is ...', './assets/images/recipe.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }




// @ViewChild('sidenav') sidenav: MdSidenav;
// currentRecipe = {};
//   showDescription(recipe) {
//     this.currentRecipe = recipe;
//     console.log(recipe);
//     this.openInfoSidenav.emit(this.sidenav.open());
//   }
}
