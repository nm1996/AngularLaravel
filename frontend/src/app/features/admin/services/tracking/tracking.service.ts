import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tracking } from "src/app/shared/models/tracking.model";

@Injectable({
  providedIn: "root"
})
export class TrackingService {
  private path = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tracking[]> {
    return this.http.get<Tracking[]>(`${this.path}/adminTrackingIndex`);
  }

  deleteOne(id: number): Observable<Object> {
    return this.http.post<Object>(`${this.path}/adminTrackingDeleteOne`, id);
  }
  deleteAll(data): Observable<Object> {
    return this.http.post<Object>(`${this.path}/adminTrackingDeleteAll`, data);
  }
}
