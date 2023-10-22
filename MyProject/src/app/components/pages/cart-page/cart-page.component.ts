import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartServiceService } from '../../../services/cart-service.service';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartServiceService: CartServiceService) {
    this.cartServiceService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(cartItem:CartItem){
    this.cartServiceService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem : CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartServiceService.changeQuantity(cartItem.food.id, quantity);
  }
}
