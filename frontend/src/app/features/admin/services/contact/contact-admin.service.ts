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
}
