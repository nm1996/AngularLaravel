import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductAdminService {
  private path = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.path}/adminProductsIndex`);
  }

  deleteProduct(id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/adminProductDelete/`, id);
  }

  getOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.path}/adminOneProduct/${id}`);
  }

  insertProduct(formData: FormData): Observable<Object> {
    return this.http.post<Object>(`${this.path}/adminProductStore`, formData);
  }

  updateProduct(formData: FormData, id: number): Observable<Object> {
    console.log(formData.get("picture"));
    return this.http.post<Object>(`${this.path}/adminUpdateProduct/${id}`, formData);
  }
}
