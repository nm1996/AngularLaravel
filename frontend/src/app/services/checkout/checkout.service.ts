import { Checkout } from './../../components/models/checkout.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private path: "http://localhost:8000/api";

  constructor(
    private http: HttpClient
  ) { }

  getUserCurrentCheckoutList(id) : Observable<Checkout[]> {
    return this.http.get<Checkout[]>(`${this.path}/userCurrentCheckoutList/${id}`);
  }
}
