import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private path = "http://localhost:8000/api";
  constructor(
    private http : HttpClient
  ) { }

  getManProducts() {
    var products = this.http.get(`${this.path}/showMenProducts`)
    return products;
  }

  getWomenProducts() {
    var products = this.http.get(`${this.path}/showWomenProducts`)
    return products;
  }

  getKidsProducts() {
    var products = this.http.get(`${this.path}/showKidsProducts`)
    return products;
  }

  getSportsProducts() {
    var products = this.http.get(`${this.path}/showSportProducts`)
    return products;
  }

  getProductDetails() {
    var product = this.http.get(`${this.path}/showProductDetails/:id`)
    return product;
  }



}




