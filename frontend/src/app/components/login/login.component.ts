import { AuthService } from './../../services/auth/auth.service';
import { TokenService } from './../../services/token/token.service';
import { JarService } from './../../services/jar/jar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  }

  public error = [];

  constructor(
    private Jar : JarService,
    private Token : TokenService,
    private Auth : AuthService,
    private router : Router
  ) { }


  onSubmit() {
    this.Jar.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('');
  }

  handleError(error) {
    this.error = error.error.error;
    
  }

  ngOnInit() {
  }

}
