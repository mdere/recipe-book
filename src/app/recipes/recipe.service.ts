import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Egg Tart', 'Very Eggy', 'https://i.ytimg.com/vi/Ndlv4ZxnRSs/maxresdefault.jpg', [
      new Ingredient('egg', 4),
      new Ingredient('pastry', 1),
      new Ingredient('surgar', 1)
    ]),
    new Recipe('Honey Toast', 'Very Toasty', 'http://www.chopstickchronicles.com/wp-content/uploads/2015/10/Shibuya-Honey-Toast-1x1.jpg', [
      new Ingredient('toast', 1),
      new Ingredient('icecream', 1),
      new Ingredient('oreos', 6),
      new Ingredient('whipcream', 1)
    ]),
    new Recipe('Dry Aged Steak', 'Very Yummy Much', 'http://www.seriouseats.com/images/20101210-prime-rib-primer-aged.jpg', [
      new Ingredient('steak', 1)
    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
