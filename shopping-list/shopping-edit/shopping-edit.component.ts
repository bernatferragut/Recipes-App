import { Component, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
// To import local references from the DOM to the Virtual TS DOM through ViewChild and Elemente Ref
  @ ViewChild('nameInput') nameInputRef: ElementRef;
  @ ViewChild('amountInput') amountInputRef: ElementRef;
  @ Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();

  onAddItem() {
    // we access the DOM valeus
    const ingName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;
    // we create the new object
    const newIngredient = new Ingredient(ingName, amountName);
    // we emit the value
    this.ingredientAdded.emit(newIngredient);
  }
}

