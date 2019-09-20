import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.scss']
})
export class WomenProductComponent implements OnInit {

  constructor(
    private womenProducts : ProductService
  ) { }

    
  products: Product[];
  
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;

  ngOnInit() {
    this.womenProducts.getWomenProducts().subscribe(
      (response: Product[]) => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onChange(event) {
    console.log(event);
    this.show 
  }
}
