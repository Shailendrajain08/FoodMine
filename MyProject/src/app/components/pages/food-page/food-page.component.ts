import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService, private cartServiceService: CartServiceService, private router : Router ){
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        this.food = foodService.getFoodById(params.id);
      }
    })
  }

  addToCart(){
    this.cartServiceService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
