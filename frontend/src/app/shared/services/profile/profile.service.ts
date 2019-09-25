import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private path = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.path}/profile/${id}`);
  }

  getUserCheckouts(id: number) {
    return this.http.get(`${this.path}/profileCheckout/${id}`);
  }
}
