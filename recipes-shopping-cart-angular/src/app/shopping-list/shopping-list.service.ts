import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService{

      ingredientsChanged = new Subject<Ingredient[]>();
      startedEditing = new Subject<number>();

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
            this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
            // use of the spread operator;
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.next(this.ingredients.slice());
      }

}