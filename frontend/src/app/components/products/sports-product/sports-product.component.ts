import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-product',
  templateUrl: './sports-product.component.html',
  styleUrls: ['./sports-product.component.scss']
})
export class SportsProductComponent implements OnInit {

  constructor(
    private sportsProducts : ProductService
  ) { }

  products;

  ngOnInit() {
    this.sportsProducts.getSportsProducts().subscribe(
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
