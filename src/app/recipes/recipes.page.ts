import { Component, OnInit } from '@angular/core';
import { Reciepe } from './reciepe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor(private reciepesService:RecipeService) { }
recipes:Reciepe[];
  ngOnInit() {
 this.recipes=this.reciepesService.getAllRecipes();
  }

}
