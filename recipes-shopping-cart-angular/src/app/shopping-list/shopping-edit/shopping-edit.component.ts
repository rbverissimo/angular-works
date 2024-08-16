import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscriptioEditIngredient: Subscription = new Subscription();

  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
    this.subscriptioEditIngredient = this.slService.startedEditing.subscribe(
      next => {

      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptioEditIngredient.unsubscribe();
  }

  onAddItem(form: NgForm){
    const formObj = form.value;
    const newIngredient = new Ingredient(formObj.name, formObj.amount);
    this.slService.addIngredient(newIngredient);
  }

}
