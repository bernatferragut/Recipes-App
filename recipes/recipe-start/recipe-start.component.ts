import { element } from 'protractor';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSubmit( form: NgForm) {
    console.log('Submitted!');
    console.log(form);
  }

}
