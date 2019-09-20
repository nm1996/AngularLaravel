import { ProductService } from '../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { LikeService } from '../../services/like/like.service';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-kids-product',
  templateUrl: './kids-product.component.html',
  styleUrls: ['./kids-product.component.scss']
})
export class KidsProductComponent implements OnInit {


  products: Product[];
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;
  user_id;

  constructor(
    private kidsProducts : ProductService,
    private like: LikeService,
    private token: TokenService
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
    this.user_id = this.token.getUser();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onChange(event) {
    console.log(event);
    this.show = +event;
  }


  onLike(product_id) {
    console.log(this.user_id)
    return this.like.like(+product_id, this.user_id).subscribe(response =>
      {console.log(response);
        this.kidsProducts.getKidsProducts().subscribe(
          (response: Product[]) => {
            console.log(response),
            this.products = response;
          },
          error => {
            console.log(error)
          }
        );

      });

}}
