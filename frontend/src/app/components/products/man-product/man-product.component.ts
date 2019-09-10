import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-man-product',
  templateUrl: './man-product.component.html',
  styleUrls: ['./man-product.component.scss']
})
export class ManProductComponent implements OnInit {

  products: Product[];

  constructor(
    private manProducts : ProductService 
  ) { }

  ngOnInit() {
    this.manProducts.getManProducts().subscribe(
      (response: Product[]) => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error)
      }
    );
  }

}
