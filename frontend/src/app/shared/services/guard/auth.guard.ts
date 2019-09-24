import { TokenService } from "src/app/shared/services/token/token.service";
import { AuthService } from "./../auth/auth.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.token.loggedIn()) {
      this.router.navigateByUrl("/authorization/login");
      return false;
    }
    return true;
  }

  private constructor(private token: TokenService, private router: Router) {}
}
