import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(
    private http : HttpClient
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}
