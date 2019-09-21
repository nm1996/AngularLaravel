import { Injectable } from "@angular/core";
import { TokenService } from "../../token/token.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GuardAdminService {
  constructor(private token: TokenService) {}
}
