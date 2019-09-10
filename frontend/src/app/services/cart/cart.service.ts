import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/components/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private path = "http://localhost:8000/api";

  constructor(
    private http : HttpClient
  ) { }
  

  getUserItems(id): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.path}/showUserCart/${id}`);
  }

  deleteFromCart(id: number): Observable<Object> {
    return this.http.post<Object>(`${this.path}/deleteUserItem`, id);
  }


}
