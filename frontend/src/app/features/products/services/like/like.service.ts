import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LikeService {
  private path: "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  like(data) {
    return this.http.post(`${this.path}/like`, data);
  }
}
