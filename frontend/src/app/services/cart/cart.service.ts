import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private path = "http://localhost:8000/api";

  constructor(
    private http : HttpClient
  ) { }
  

  getUserItems(id) {
    var userItems = this.http.get(`${this.path}/showUserCart/${id}`)
    return userItems; 
  }


}
