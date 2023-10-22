import { Component } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  cartQuantity = 0;

  constructor(private cartService: CartServiceService){
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

}
