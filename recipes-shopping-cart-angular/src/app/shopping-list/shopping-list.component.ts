import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Test Ingredient', 10),
    new Ingredient('NuTest Ingredient', 5),
  ];

  constructor(){}

  ngOnInit(){}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
