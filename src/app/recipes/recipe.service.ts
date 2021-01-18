import { Injectable } from '@angular/core';
import { Reciepe } from './reciepe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private reciepes:Reciepe[]=[
    {
      id:'r1',title:'Milk Shake',imageUrl:'https://www.spendwithpennies.com/wp-content/uploads/2019/09/Chocolate-Milkshake-SpendWithPennies-2.jpg',ingredients:['Apple','Milk','Sugar']
    },
    {
      id:'r2',title:'Noodles',imageUrl:'https://www.spendwithpennies.com/wp-content/uploads/2019/09/Chocolate-Milkshake-SpendWithPennies-2.jpg',ingredients:['Apple','Milk','Sugar']
    },
    {
      id:'r3',title:'Burger',imageUrl:'https://www.spendwithpennies.com/wp-content/uploads/2019/09/Chocolate-Milkshake-SpendWithPennies-2.jpg',ingredients:['Apple','Milk','Sugar']
    },
  ]
  constructor() { }
  getAllRecipes(){
    return [...this.reciepes]
  }
  getReciepe(reciepeId:string){
return {...this.reciepes.find(recipe=>{
  return recipe.id===reciepeId;
})}
  }
  deleteRecipe(reciepeId:string){
    this.reciepes=this.reciepes.filter(recipe=>{
      return recipe.id!==reciepeId;
    })
  }
}
