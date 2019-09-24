import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({
  providedIn: "root"
})
export class NoAuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.token.loggedIn()) {
      this.router.navigateByUrl("/");
      return false;
    }
    return true;
  }

  private constructor(private token: TokenService, private router: Router) {}
}
