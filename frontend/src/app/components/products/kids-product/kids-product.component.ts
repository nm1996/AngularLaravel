import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-product',
  templateUrl: './kids-product.component.html',
  styleUrls: ['./kids-product.component.scss']
})
export class KidsProductComponent implements OnInit {

  constructor(
    private kidsProducts : ProductService
  ) { }

  products;

  ngOnInit() {
    this.kidsProducts.getKidsProducts().subscribe(
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
