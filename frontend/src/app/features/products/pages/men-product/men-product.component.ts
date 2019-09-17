import { ProductService } from './../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../shared/models/product.model';

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.scss']
})
export class MenProductComponent implements OnInit {

  products: Product[];

  constructor(
    private menProducts : ProductService 
  ) { }

  ngOnInit() {
    this.menProducts.getMenProducts().subscribe(
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
