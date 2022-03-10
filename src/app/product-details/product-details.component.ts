import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { product, Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productid: any;
product:product | undefined;
productData=Products;
filteredData:any=[];
quantity: number=1;
  mesg: any;
  constructor(public route: ActivatedRoute,public cart:CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data:ParamMap)=>{
this.productid=Number(data.get('id'));
console.log(this.productData);
      this.filteredData = this.productData.find(({id})=> id === this.productid);
      // console.log(this.filteredData);
    })
  }
quantity1(id:number){
  if(id<10){
this.quantity = id+1;
  }
  else{
    this.mesg='maximum quantity reached.';
  }
}
quantity2(id:number){
  if(id>1){
  this.quantity = id-1;
  }
  else{
    this.mesg='mimum quantity is 1.';
  }
  }
  addtocart(data:any){
this.cart.addtocart(data,this.quantity);
alert("product is successfully added to the cart");
  }
}
