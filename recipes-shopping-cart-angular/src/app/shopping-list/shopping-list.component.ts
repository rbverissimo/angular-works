import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscriptionIngredientsChanged: Subscription;

  constructor(private slService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();

    this.subscriptionIngredientsChanged = this.slService.ingredientsChanged
    .subscribe(
      (i: Ingredient[]) => {
        this.ingredients = i;
      }
      );
  }

  ngOnDestroy(): void {
    this.subscriptionIngredientsChanged.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

}
