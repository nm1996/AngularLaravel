import { AuthService } from './../../../shared/services/auth/auth.service';
import { JarService } from './../../../shared/services/jar/jar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './../../../shared/services/token/token.service';

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
    private jar : JarService,
    private Token : TokenService,
    private auth : AuthService,
    private router : Router
  ) { }


  onSubmit() {
    this.jar.login(this.form).subscribe(
      data => {
        this.handleResponse(data);
        this.handleUser(data['user']);
        console.log(data['user'], 'user');
      },
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('');
  }

  handleUser(user) {
    this.Token.handleUser(user);
  }

  handleError(error) {
    this.error = error.error.error;
    
  }

  ngOnInit() {
  }

}
