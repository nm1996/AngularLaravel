import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-man-product',
  templateUrl: './man-product.component.html',
  styleUrls: ['./man-product.component.scss']
})
export class ManProductComponent implements OnInit {

  constructor(
    private manProducts : ProductService 
  ) { }

  products;

  ngOnInit() {
    this.manProducts.getManProducts().subscribe(
      response => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error)
      }
    );
  }

}
