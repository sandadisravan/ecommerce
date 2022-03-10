import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products=Products;
share(){
  alert("Link shared in whats app. please check your whats app")
}
notify(){
  alert("we will notify when the product is in stock")
}
}
