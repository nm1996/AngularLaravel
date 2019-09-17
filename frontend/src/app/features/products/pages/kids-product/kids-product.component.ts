import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-kids-product',
  templateUrl: './kids-product.component.html',
  styleUrls: ['./kids-product.component.scss']
})
export class KidsProductComponent implements OnInit {

  
  products: Product[];

  constructor(
    private kidsProducts : ProductService
  ) { }

  ngOnInit() {
    this.kidsProducts.getKidsProducts().subscribe(
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
