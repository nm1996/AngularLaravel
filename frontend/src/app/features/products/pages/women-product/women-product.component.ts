import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { LikeService } from '../../services/like/like.service';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.scss']
})
export class WomenProductComponent implements OnInit {

  constructor(
    private womenProducts : ProductService,
    private token: TokenService,
    private like: LikeService
  ) { }


  products: Product[];

  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;
  user_id;

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
    this.user_id = +this.token.getUser();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onChange(event) {
    console.log(event);
    this.show
  }
  onLike(product_id) {
    console.log(this.user_id)
    return this.like.like(+product_id, this.user_id).subscribe(response =>
    this.womenProducts.getWomenProducts().subscribe(
      (response: Product[]) => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error)
      }
    ))
}
}
