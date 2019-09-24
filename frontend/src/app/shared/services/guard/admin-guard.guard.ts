import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
  CanActivateChild,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.token.loggedIn()) {
      this.router.navigateByUrl("/authorization/login");
    } else {
      if (!this.token.isAdmin()) {
        this.router.navigateByUrl("/profile");
        return false;
      }
    }
    return true;
  }
  constructor(private token: TokenService, private router: Router) {}
}
