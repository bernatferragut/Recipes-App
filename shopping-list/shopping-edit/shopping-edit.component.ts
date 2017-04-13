import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// To import local references from the DOM to the Virtual TS DOM through ViewChild and Elemente Ref
  @ ViewChild('nameInput') nameInputRef: ElementRef;
  @ ViewChild('amountInput') amountInputRef: ElementRef;

  constructor( private slService: ShoppingListService ) { };

  ngOnInit() { }

  onAddItem() {
    // we access the DOM valeus
    const ingName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;
    // we create the new object
    const newIngredient = new Ingredient(ingName, amountName);
    // shoppingListService
    this.slService.addIngredient(newIngredient);
  }
}

