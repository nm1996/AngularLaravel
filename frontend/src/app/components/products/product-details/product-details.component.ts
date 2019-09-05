import { ProductService } from './../../../services/products/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private product : ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  details;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.product.getProductDetails(id).subscribe(
        response => {
          console.log(response),
          this.details = response;
        },
        error => {
          console.log(error);
        }
    );
  }


}
