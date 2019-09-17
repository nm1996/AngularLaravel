import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.scss']
})
export class WomenProductComponent implements OnInit {

  constructor(
    private womenProducts : ProductService
  ) { }

    
  products;

  ngOnInit() {
    this.womenProducts.getWomenProducts().subscribe(
      response => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
