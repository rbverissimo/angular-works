import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

      ingredientsChanged = new EventEmitter<Ingredient[]>();

      private ingredients: Ingredient[] = [
                  new Ingredient('Test Ingredient', 10),
                  new Ingredient('NuTest Ingredient', 5),
                  ];

      getIngredients(){
            // using slice returns a copy of the array
            return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
            // use of the spread operator;
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

}