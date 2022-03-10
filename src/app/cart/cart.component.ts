import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items:any;
shipping:any;
checkout = this.fb.group({
  name: '',
  address: ''
});
  constructor(public cart:CartService,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.items=this.cart.getitems();
    // this.storage['set']("cart",this.items);
    console.log(this.items);
    this.shipping = this.cart.getShippingPrices();
    // this.cart.getShippingPrices().subscribe((data)=>{
    //   this.shipping=data;
    // })
    console.log(this.shipping);
  }
remove(item:any){
this.items.pop(item);
  alert("product hase been removed from cart");
}
onSubmit(name:string): void {
  // Process checkout data here
  this.items = this.cart.clearcart();
  console.warn('Your order has been submitted', this.checkout.value);
  this.checkout.reset();
  alert("Order Placed Successfully!! for  "+name)
}
}
