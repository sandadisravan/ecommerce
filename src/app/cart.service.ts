import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items:product[]=[];

  constructor(public http:HttpClient) { }
  addtocart(product:product,count:number){
    for(let i=0;i<count;i++){
      this.items.push(product);
    }
    console.log(this.items);
  }
  getitems(){
    return this.items;
  }
  // remove(){

  // }
  // getshippinprices(){
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  // }
  getShippingPrices(){

    return [
 
      {
        "type": "Overnight",
        "price": 25.99
      },
      {
        "type": "2-Day",
        "price": 9.99
      },
      {
        "type": "Postal",
        "price": 2.99
      }
    ]
  }
clearcart(){
  this.items=[];
  return this.items;
}
}
