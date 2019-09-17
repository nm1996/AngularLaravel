import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http : HttpClient
  ) { }

  insertContact(data): Observable<Contact>{
    return this.http.post<Contact>(`http://localhost:8000/api/insertContact`, data);
  }

  getInfos() {
    return this.http.get('http://localhost:8000/api/infos');
  }
}
