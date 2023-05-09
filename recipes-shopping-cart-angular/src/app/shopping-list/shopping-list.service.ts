import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

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
      }

}