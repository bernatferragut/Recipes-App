import { Router, ActivatedRoute } from '@angular/router';
import { Component, ViewChild, ViewContainerRef, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { MdSidenav, MdDialog, MdDialogConfig} from '@angular/material';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor( private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute) { };

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
