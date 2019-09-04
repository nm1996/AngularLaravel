import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private productDetail : ProductService
  ) { }

  details;
  ngOnInit() {
    this.productDetail.getProductDetails().subscribe(
      response => {
        console.log(response),
        this.details = response;
      },
      error => {
        console.log(error)
      }
    )
  }

}
