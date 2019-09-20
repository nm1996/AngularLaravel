import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-sports-product',
  templateUrl: './sports-product.component.html',
  styleUrls: ['./sports-product.component.scss']
})
export class SportsProductComponent implements OnInit {

  constructor(
    private sportsProducts : ProductService
  ) { }

  products: Product[];
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;

  ngOnInit() {
    this.sportsProducts.getSportsProducts().subscribe(
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
    this.show = +event;
  }

}
