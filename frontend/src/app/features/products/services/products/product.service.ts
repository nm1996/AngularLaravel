import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private path = "http://localhost:8000/api";
  constructor(
    private http : HttpClient
  ) { }

  getMenProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.path}/showMenProducts`).pipe(map(
      (response: Product[]) => {
        console.log(response);
        return response;
      }
    ));
  }

  getWomenProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.path}/showWomenProducts`);
  }

  getKidsProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.path}/showKidsProducts`);
  }

  getSportsProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.path}/showSportProducts`);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.path}/showProductDetails/${id}`);
  }



}
