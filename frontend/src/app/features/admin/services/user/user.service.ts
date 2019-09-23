import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/shared/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private path = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.path}/adminUsersIndex`);
  }

  deleteUser(data: number): Observable<number> {
    return this.http.post<number>(`${this.path}/adminUserDelete`, data);
  }

  getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.path}/adminUserGetOne/${id}`);
  }

  updateUser(
    id: number,
    name: string,
    email: string,
    password: string,
    city: string,
    address: string,
    role_id?: number
  ): Observable<number> {
    return this.http.post<number>(`${this.path}/adminUserUpdate/${id}`, {
      name,
      email,
      password,
      city,
      address,
      role_id
    });
  }

  insertUser(
    name: string,
    email: string,
    password: string,
    city: string,
    address: string,
    role_id: number
  ): Observable<number> {
    return this.http.post<number>(`${this.path}/adminUserStore`, {
      name,
      email,
      password,
      city,
      address,
      role_id
    });
  }
}
