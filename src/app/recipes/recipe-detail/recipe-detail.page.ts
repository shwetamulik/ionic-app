import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Reciepe } from '../reciepe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loadedRecipe:Reciepe;
  constructor(private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService,
private router:Router,
private alertCtrl:AlertController
    ) { }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(paramMap=>{
    if(!paramMap.has('recipeId')){
      //redirect
      this.router.navigate(['/recipes']);
      return;
    }
    const recipeId=paramMap.get('recipeId');
    this.loadedRecipe= this.recipeService.getReciepe(recipeId);
  });
  }
onDeleteRecipe(){
  this.alertCtrl.create({
  header:'Are you sure?',
  message:'Do you really want to delete this reciepe?',
  buttons:[
    {
    text:'Cancel',
    role:'cancel'
    },
    {
      text:'Delete',
      handler:()=>{
        this.recipeService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }
  ]
})
.then(alertEl=>{
  alertEl.present();
})
  
  

}
}
