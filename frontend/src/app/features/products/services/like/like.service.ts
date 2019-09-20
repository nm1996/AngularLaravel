import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LikeService {
  private path: "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  like(product_id: number, user_id) {
    return this.http.post(`http://localhost:8000/api/like`, {user_id, product_id});
  }
}
