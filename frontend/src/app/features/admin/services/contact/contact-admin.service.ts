import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "src/app/shared/models/contact.model";
import { Answers } from "src/app/shared/models/answers.model";

@Injectable({
  providedIn: "root"
})
export class ContactAdminService {
  private path = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.path}/adminContactQuestions`);
  }

  getAnswers(): Observable<Answers[]> {
    return this.http.get<Answers[]>(`${this.path}/adminContactAnswered`);
  }

  insertAnswer(contact_id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/insertAnswer`, contact_id);
  }
  deleteContact(id: number): Observable<Object> {
    return this.http.post<Object>(`${this.path}/deleteContact`, id);
  }
  deleteAnswer(id: number): Observable<Object> {
    return this.http.post<Object>(`${this.path}/deleteAnswer`, id);
  }
}
