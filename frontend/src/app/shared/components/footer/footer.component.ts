import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  loggedIn: boolean;
  user_id;
  role;

  constructor(
    private auth: AuthService,
    private token: TokenService,
  ) { }

  ngOnInit() {

    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    this.user_id = this.token.getUser();
    this.role = this.token.getRole();
    console.log(this.role);
  }

}
